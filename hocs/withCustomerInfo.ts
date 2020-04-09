import React from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';

const CUSTOMER_INFO_QUERY = gql`
    query GetCustomerInfo($customerAccessToken:String!){
        customer(customerAccessToken: $customerAccessToken){
            id
            email
            firstName
            lastName
        }
    }
`;

export type GetCustomerInfoVariables = {
  customerAccessToken: string;
};

export type GetCustomerInfoResponse = {
  customer: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  };
};

export const withCustomerInfo = graphql<{}, GetCustomerInfoResponse>(CUSTOMER_INFO_QUERY, {
  skip: (props: GetCustomerInfoVariables) => props.customerAccessToken === '',
  options: (props: GetCustomerInfoVariables) => ({
    variables: {
      customerAccessToken: props.customerAccessToken,
    },
  }),
});
