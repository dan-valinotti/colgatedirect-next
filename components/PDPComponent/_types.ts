import gql from 'graphql-tag';
import {
  CurrencyCode, ProductVariant,
} from '../../models';

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
