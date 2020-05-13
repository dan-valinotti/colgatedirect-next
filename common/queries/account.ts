import { gql } from 'apollo-boost';

/**
 * Login Types/Queries
 */
export interface LoginQueryVariables {
  input: {
    email: string;
    password: string;
  };
}

export interface CustomerLoginRequest {
  email: string;
  password: string;
}

export interface CustomerLoginResponse {
  customerAccessTokenCreate: {
    customerUserErrors: any[];
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
  };
}

export interface ErrorStatus {
  status: boolean;
  code?: string;
  message?: string;
}

export const CUSTOMER_LOGIN_QUERY = gql`
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

/**
 * Getting Customer Info Types/Queries
 */
export type GetCustomerInfoResponse = {
  customer: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  };
};

export const CUSTOMER_INFO_QUERY = gql`
    query GetCustomerInfo($customerAccessToken:String!){
        customer(customerAccessToken: $customerAccessToken){
            id
            email
            firstName
            lastName
        }
    }
`;
