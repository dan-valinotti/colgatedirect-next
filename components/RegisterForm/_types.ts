import { gql } from 'apollo-boost';

export interface ErrorStatus {
  status: boolean;
  code?: string;
  message?: string;
}

export interface CustomerCreateRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface CustomerCreateResponse {
  customerCreate: {
    userErrors: [{
      field: string;
      message: string;
    }];
    customer: {
      id: string;
    };
  };
}

export const CustomerCreateQuery = gql`
    mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
            customer {
                id
            }
            userErrors {
                field
                message
            }
        }
    }
`;

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

export const CustomerLoginQuery = gql`
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
