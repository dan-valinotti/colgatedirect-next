import { HttpLink, InMemoryCache } from 'apollo-boost';
import ApolloClient from 'apollo-client';
import httpConfig from '../apollo.config';

const createApolloClient = (initState, ctx) => new ApolloClient({
  link: new HttpLink({
    uri: httpConfig.client.service.url,
    headers: httpConfig.client.service.headers,
  }),
  ssrMode: true,
  cache: new InMemoryCache().restore(initState),
  connectToDevTools: true,
});

export default createApolloClient;
