import gql from 'graphql-tag';
import { CurrencyCode, ProductPriceRange, ProductVariant } from '../../models';

/**
 * Individual Product Types / Queries
 */
export interface ProductDetails {
  productByHandle: {
    id: string;
    title: string;
    handle: string;
    description: string;
    images: {
      edges: [
        {
          node: {
            id: string;
            originalSrc: string;
            transformedSrc: string;
            altText: string;
          };
        }
      ];
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: CurrencyCode;
        currency: string;
      };
    };
    variants: {
      edges: [{
        node: ProductVariant;
      }];
    };
  };
}

export const PRODUCT_INFO_QUERY = gql`
    query ProductDetailQuery($handle:String!){
        productByHandle(handle:$handle){
            id
            variants(first:1) {
                edges {
                    node {
                        id
                        title
                    }
                }
            }
            handle
            title
            description
            images(first:1){
                edges{
                    node{
                        id
                        transformedSrc
                    }
                }
            }
            priceRange {
                minVariantPrice{
                    amount
                }
            }
        }
    }
`;

/**
 * All Products Types / Queries
 */
export const PRODUCTS_QUERY = gql`
    query ProductsQuery($cursor: String){
        products(first: 50, after: $cursor){
            edges{
                node{
                    id
                    title
                    handle
                    description
                    variants(first: 10) {
                        edges {
                            node {
                                id
                            }
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                id
                                originalSrc
                                transformedSrc
                                altText
                            }
                        }
                    }
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                }
            }
        }
    }
`;

export interface ProductsType {
  products: {
    edges: [
      {
        node: {
          id: string;
          title: string;
          handle: string;
          description: string;
          variants: {
            edges: [
              {
                node: {
                  id: string;
                };
              }
            ];
          };
          images: {
            edges: [
              {
                node: {
                  id: string;
                  originalSrc: string;
                  transformedSrc: string;
                  altText: string;
                };
              }
            ];
          };
          priceRange: ProductPriceRange;
        };
      }
    ];
  };
}

// Map line items to array for cart replacement
export function getLineItems(lineItems): object[] {
  if (lineItems) {
    return lineItems.map((item): object => {
      if (item.node) {
        // console.log(`Item with node:`, item.node);
        return {
          variantId: item.node.variant.id,
          quantity: item.node.quantity,
        };
      }
      // console.log(`Item:`, item);
      return {
        variantId: item.id,
        quantity: item.quantity,
      };
    });
  }

  return [];
}
