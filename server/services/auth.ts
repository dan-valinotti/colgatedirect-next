import { ApolloClient, gql } from "apollo-boost";
import jwt from 'jsonwebtoken';
import httpConfig from '../../apollo.config';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {fetch} from 'cross-fetch/polyfill';
require('dotenv').config();

interface LoginQueryVariables {
  input: {
    email: string;
    password: string;
  }
}
interface CustomerLoginResponse {
  customerAccessTokenCreate: {
    customerUserErrors: any[];
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
  };
}

const { JWT_SECRET } = process.env;
const client = new ApolloClient({
  link: createHttpLink({
    uri: httpConfig.client.service.url,
    headers: httpConfig.client.service.headers,
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});


const LOGIN_QUERY = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;

export async function login(req, res) {
  const { accessToken } = req.body;
  const validate = jwt.verify(accessToken, JWT_SECRET, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      client.mutate<CustomerLoginResponse, LoginQueryVariables>({
        mutation: LOGIN_QUERY,
        variables: { input: {
          email: user.email,
          password: user.password,
        } },
      })
      .then((result) => res.json(result))
      .catch((error) => res.json(error));
    }
  });
}
