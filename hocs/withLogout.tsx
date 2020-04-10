import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';

// Logout GraphQL Query
const LOGOUT_QUERY = gql`
    mutation customerAccessTokenDelete($customerAccessToken: String!) {
        customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
            deletedAccessToken
            deletedCustomerAccessTokenId
            userErrors {
                field
                message
            }
        }
    }
`;

// Logout Query request variables
export type LogoutQueryVariables = {
  customerAccessToken: string;
};

// Logout Query response
export type LogoutQueryResponse = {
  customerAccessTokenDelete: {
    deletedAccessToken: string;
    deletedCustomerAccessTokenId: string;
    userErrors: any[];
  };
};

/*
* Higher Order Component
*
* withLogout - provide functionality for wrapped components to execute a logout attempt
*   to Shopify GraphQL API using 'customerAccessToken' (defined in localStorage if
*   logged in)
* */
export const withLogout = graphql<{}, LogoutQueryResponse>(LOGOUT_QUERY, {
  options: (props: LogoutQueryVariables) => ({
    variables: {
      customerAccessToken: props.customerAccessToken,
    },
  }),
});
