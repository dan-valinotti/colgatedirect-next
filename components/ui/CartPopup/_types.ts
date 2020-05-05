import { gql } from 'apollo-boost';
import { LineItem } from '../../PDPComponent/_types';

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

export type PriceV2 = {
  amount: string;
  currency: string;
};

export type GetCartResponse = {
  node: {
    id: string;
    title: string;
    webUrl: string;
    subtotalPriceV2: PriceV2;
    totalTaxV2: PriceV2;
    totalPriceV2: PriceV2;
    lineItems: {
      pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
      edges: LineItem[];
    };
  };
};
