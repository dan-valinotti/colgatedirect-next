import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';
import { withApollo } from 'react-apollo';
import httpConfig from '../apollo.config';
import { GET_CART_QUERY, GetCartResponse } from '../components/CartController/_types';

const config = {
  link: new HttpLink({
    uri: httpConfig.client.service.url,
    headers: httpConfig.client.service.headers,
  }),
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
