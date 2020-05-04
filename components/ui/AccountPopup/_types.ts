import gql from 'graphql-tag';

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
export interface CustomerData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface GetCustomerDataResponse {
  data: {
    customer: {
      id: string;
      email: string;
      firstName?: string;
      lastName?: string;
    };
  };
}

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
