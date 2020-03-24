import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';
import httpConfig from '../apollo.config';

const { GRAPHQL_URL } = process.env;

const config = {
  link: new HttpLink({
    uri: httpConfig.client.service.url,
    headers: httpConfig.client.service.headers,
  }),
};

export default withData(config);
