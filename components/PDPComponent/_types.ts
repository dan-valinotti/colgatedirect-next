import gql from 'graphql-tag';

export const PRODUCT_INFO_QUERY = gql`
    query ProductDetailQuery($handle:String!){
        productByHandle(handle:$handle){
            id
            variants(first:1) {
                edges {
                    node {
                        id
                    }
                }
            }
            handle
            title
            description
            images(first:1){
                edges{
                    node{
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

export interface LineItem {
  variantId: string;
  quantity: number;
}

export interface Variants {
  edges: [{
    node: {
      id: string;
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
  variants: Variants;
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
      };
    };
    variants: {
      edges: [{
        node: {
          id: string;
        };
      }];
    };
  };
}
