/* eslint-disable react/prop-types */
import React from 'react';
import {
  ApolloClient, defaultDataIdFromObject, HttpLink, InMemoryCache,
} from 'apollo-boost';
import 'isomorphic-unfetch';
import { ApolloProvider } from '@apollo/react-hooks';
import App from 'next/app';
import config from '../apollo.config';

let globalApolloClient = null;
const inMemoryCache = new InMemoryCache({
  dataIdFromObject: (object) => object.id || defaultDataIdFromObject(object),
});

function createClient(initState, ctx) {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: config.client.service.url,
      headers: config.client.service.headers,
    }),
    cache: inMemoryCache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      mutate: {
        errorPolicy: 'all',
      },
    },
  });
}

export const initApolloClient = (initialState, ctx) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createClient(initialState, ctx);
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = createClient(initialState, ctx);
  }

  return globalApolloClient;
};

export const initOnContext = (ctx) => {
  const inAppContext = Boolean(ctx.ctx);

  // We consider installing `withApollo({ ssr: true })` on global App level
  // as antipattern since it disables project wide Automatic Static Optimization.
  if (process.env.NODE_ENV === 'development') {
    if (inAppContext) {
      console.warn(
        'Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n'
                + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n',
      );
    }
  }

  // Initialize ApolloClient if not already done
  const apolloClient = ctx.apolloClient
            || initApolloClient(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);
  // the prop as `null` to the browser.
  apolloClient.toJSON = () => null;

  // Add apolloClient to NextPageContext & NextAppContext.
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.
  ctx.apolloClient = apolloClient;
  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};

export const withApollo = ({ ssr = false } = {}) => (PageComponent) => {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    let client;
    if (apolloClient) {
      // Happens on: getDataFromTree & next.js ssr
      client = apolloClient;
    } else {
      // Happens on: next.js csr
      client = initApolloClient(apolloState, undefined);
    }

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };
    // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx) => {
      const inAppContext = Boolean(ctx.ctx);
      const { apolloClient } = initOnContext(ctx);

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (inAppContext) {
        pageProps = await App.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        const { AppTree } = ctx;
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if dataFromTree is enabled
        if (ssr && AppTree) {
          try {
            // Import `@apollo/react-ssr` dynamically.
            // We don't want to have this in our client bundle.
            const { getDataFromTree } = await import('@apollo/react-ssr');

            // Since AppComponents and PageComponents have different context types
            // we need to modify their props a little.
            let props;
            if (inAppContext) {
              props = { ...pageProps, apolloClient };
            } else {
              props = { pageProps: { ...pageProps, apolloClient } };
            }

            // Take the Next.js AppTree, determine which queries are needed to render,
            // and fetch them. This method can be pretty slow since it renders
            // your entire AppTree once for every query. Check out apollo fragments
            // if you want to reduce the number of rerenders.
            // https://www.apollographql.com/docs/react/data/fragments/
            await getDataFromTree(<AppTree {...props} />);
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }
        }
      }

      return {
        ...pageProps,
        // Extract query data from the Apollo store
        apolloState: apolloClient.cache.extract(),
        // Provide the client for ssr. As soon as this payload
        // gets JSON.stringified it will remove itself.
        apolloClient: ctx.apolloClient,
      };
    };
  }

  return WithApollo;
};
