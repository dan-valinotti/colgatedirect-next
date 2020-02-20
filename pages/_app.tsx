import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks';
import services from '../services';
import isServer from 'detect-node';
import apollo from '~lib/apolloClient'
import withRedux from '../hocs/withRedux';

class MyApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    const { req, res, store } = ctx;
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    // if (isServer) await store.dispatch(services.products.getFirstPage(req, res));

    return { pageProps };
  }
}

export default withRedux(MyApp);
