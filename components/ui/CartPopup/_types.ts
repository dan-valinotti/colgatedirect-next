import { gql } from 'apollo-boost';
import { LineItem } from '../../PDPComponent/_types';

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
