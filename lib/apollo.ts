import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';
import { withApollo } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import httpConfig from '../apollo.config';
import { GET_CART_QUERY, GetCartResponse } from '../components/CartController/_types';

const createCache = () => {
  while (!window);
  const cache = new InMemoryCache();
  persistCache({
    cache,
    storage: window.localStorage,
  }).then((res) => console.log(res));
};

const config = {
  link: new HttpLink({
    uri: httpConfig.client.service.url,
    headers: httpConfig.client.service.headers,
  }),
  createCache,
};

interface LineItemInput {
  checkoutId: string;
}

const addToCart = ({ client }: { client: any }) => {
  console.log(typeof client);
  const res = client.query({ query: GET_CART_QUERY });
  const { data } = res;

  console.log(data);
};

// export const callAddToCart = withApollo(addToCart);

export default withData(config);
