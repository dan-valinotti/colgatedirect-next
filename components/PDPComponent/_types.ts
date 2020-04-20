import gql from 'graphql-tag';
import {
  CurrencyCode, Metafield, MetafieldConnection, ProductVariant,
} from '../../models';
import { PriceV2 } from '../CartController/_types';

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

export interface LineItemShort {
  variantId: string;
  quantity: number;
}

export interface LineItem {
  node: {
    variantId: string;
    quantity: number;
    id: string;
    variant: ProductVariant;
    title: string;
    metafields: Metafield[];
    priceV2: PriceV2;
  };
}

export interface Variants {
  edges: [{
    node: {
      id: string;
      variantId: string;
      quantity: number;
      variant: ProductVariant;
      title: string;
      metafields: Metafield[];
    };
  }];
}

export interface TransformedProduct {
  id: string;
  handle: string;
  title: string;
  description: string;
  imageSrc: string;
  price: string;
  priceV2: PriceV2;
  variants: {
    edges: [{
      node: ProductVariant;
    }];
  };
  variant?: ProductVariant;
  metafields?: Metafield[];
}

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
