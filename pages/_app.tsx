import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks';
import services from '../services';
import isServer from 'detect-node';
import apollo from '~lib/apolloClient'
import withRedux from '../hocs/withRedux';
import { InMemoryCache, HttpLink, ApolloClient } from 'apollo-boost';
import { PRODUCTS_QUERY } from '../services/products.service';

const cache = new InMemoryCache();

const GITHUB_BASE_URL = 'https://colgate-connect.myshopify.com/api/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    "X-Shopify-Storefront-Access-Token":	"175a45bbfd272d47d276cad711ea3cba"
  },
});
const client = new ApolloClient({
  link: httpLink,
  cache
});
client.query({
  query: PRODUCTS_QUERY,
  variables: {
    cursor: '',
    reverse: false
  }
}).then((result) => console.log(result))
class MyApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    const { req, res, store } = ctx;
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    if (isServer) await store.dispatch(services.products.getFirstPage(req));

    return { pageProps };
  }
}

export default withRedux(MyApp);
