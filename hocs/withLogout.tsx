import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';

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

export type LogoutQueryVariables = {
  customerAccessToken: string;
};

export type LogoutQueryResponse = {
  customerAccessTokenDelete: {
    deletedAccessToken: string;
    deletedCustomerAccessTokenId: string;
    userErrors: any[];
  };
};

export const withLogout = graphql<{}, LogoutQueryResponse>(LOGOUT_QUERY, {
  options: (props: LogoutQueryVariables) => ({
    variables: {
      customerAccessToken: props.customerAccessToken,
    },
  }),
});
