export type GetCartResponse = {
  node: {
    id: string;
    webUrl: string;
    subtotalPriceV2: {
      amount: string;
      currencyCode: string;
      __typename: string;
    };
    totalTaxV2: {
      amount: string;
      currencyCode: string;
      __typename: string;
    };
    totalPriceV2: {
      amount: string;
      currencyCode: string;
      __typename: string;
    };
    lineItems: LineItems;
    __typeName: string;
  };
};

export type LineItems = {
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    __typename: string;
  };
  edges: [{
    node: {
      id: string;
      title: string;
      quantity: string;
      variant: {
        id: string;
        title: string;
        priceV2: {
          amount: string;
          currencyCode: string;
          __typename: string;
        };
        image: {
          transformedSrc: string;
          __typename: string;
        };
        typeName: string;
      };
      __typename: string;
    };
  }];
};

export type LineItemsInput = {
  variantId: string;
  quantity: number;
};
