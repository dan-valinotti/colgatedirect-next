import { ApolloClient } from 'apollo-boost';
import jwt from 'jsonwebtoken';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { fetch } from 'cross-fetch/polyfill';
import httpConfig from '../apollo.config';
import {
  LoginQueryVariables,
  CustomerLoginResponse,
  CUSTOMER_LOGIN_QUERY,
} from '../common/queries/account';

require('dotenv').config();

const { JWT_SECRET } = process.env;
const client = new ApolloClient({
  link: createHttpLink({
    uri: httpConfig.client.service.url,
    headers: httpConfig.client.service.headers,
    fetch,
  }),
  cache: new InMemoryCache(),
});

export function login(req, res) {
  const { accessToken } = req.body;
  const validate = jwt.verify(accessToken, JWT_SECRET, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      client.mutate<CustomerLoginResponse, LoginQueryVariables>({
        mutation: CUSTOMER_LOGIN_QUERY,
        variables: {
          input: {
            email: user.email,
            password: user.password,
          },
        },
      })
        .then((result) => res.json(result))
        .catch((error) => res.json(error));
    }
  });
}
