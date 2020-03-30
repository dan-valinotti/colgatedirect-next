import gql from 'graphql-tag';
import { ProductPriceRange } from '../../models';

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
