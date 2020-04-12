import { ProductPriceRange } from '../../../models';

export interface TestInterface {
  default: string;
}

export interface FeaturedType {
  node: {
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
    priceRange: ProductPriceRange;
  };
}
