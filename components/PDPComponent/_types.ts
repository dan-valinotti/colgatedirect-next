import gql from 'graphql-tag';
import {
  CurrencyCode, Metafield, MetafieldConnection, ProductVariant,
} from '../../models';
import { PriceV2 } from '../CartController/_types';

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
