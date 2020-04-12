import { gql } from 'apollo-boost';

export type Collections = {
  /** List of Product collections. */
  collections: {
    edges: [{
      /** Product collection variables */
      node: {
        /** Shopify Collection UID */
        id: string;
        /** URL handle */
        handle: string;
        /** Display name */
        title: string;
        /** List of products included in collection. */
        products: Products;
      };
    }];
  };
};

export type Products = {
  products: {
    edges: [{
      node: {
        title: string;
        handle: string;
      };
    }];
  };
};

export type NavBarItem = {
  title: string;
  handle: string;
};

export const COLLECTIONS_QUERY = gql`
    query CollectionsQuery($cursor: String){
        collections(first:20, after: $cursor) {
            edges {
                node {
                    id
                    handle
                    title
                    products(first: 20){
                        edges{
                            node{
                                title
                                handle
                            }
                        }
                    }
                }
            }
        }
    }
`;
