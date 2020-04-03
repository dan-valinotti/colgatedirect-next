import { gql } from 'apollo-boost';

export interface CustomerLoginRequest {
  email: string;
  password: string;
}

export interface CustomerLoginResponse {
  data: {
    customerAccessTokenCreate: {
      customerUserErrors: any[];
      customerAccessToken: {
        accessToken: string;
        expiresAt: string;
      };
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
