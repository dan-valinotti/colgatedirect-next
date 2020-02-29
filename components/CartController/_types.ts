import { gql } from 'apollo-boost';

export type PriceV2 = {
  amount: string;
  currency: string;
};

export interface GetCartRequest {
  checkoutId: string;
}

export type GetCartResponse = {
  data: {
    node: {
      id: string;
      webUrl: string;
      subtotalPriceV2: PriceV2;
      totalTaxV2: PriceV2;
      totalPriceV2: PriceV2;
      lineItems: {
        pageInfo: {
          hasNextPage: boolean;
          hasPreviousPage: boolean;
        };
        edges: [];
      };
    };
  };
};

export type CreateCartResponse = {
  data: {
    checkoutCreate: {
      checkout: {
        id: string;
      };
    };
    checkoutUserErrors: string[];
  };
};

export type CreateCartRequest = {
  input: object;
};

export const CREATE_CART = gql`
    mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
            checkout {
                id
            }
            checkoutUserErrors {
                code
                field
                message
            }
        }
    }
`;

export const GET_CART_QUERY = gql`
    fragment checkout on Checkout {
        id
        webUrl
        subtotalPriceV2 {
            amount
            currencyCode
        }
        totalTaxV2 {
            amount
            currencyCode
        }
        totalPriceV2 {
            amount
            currencyCode
        }
        lineItems(first: 250) {
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
            edges {
                node {
                    id
                    title
                    variant {
                        id
                        title
                        image {
                            transformedSrc
                        }
                        priceV2 {
                            amount
                            currencyCode
                        }
                    }
                    quantity
                }
            }
        }
    }
    query checkout($checkoutId: ID!) {
        node(id: $checkoutId) {
            ... on Checkout {
                ...checkout
            }
        }
    }
`;
