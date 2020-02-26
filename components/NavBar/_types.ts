import { gql } from "apollo-boost";

export type Collections = {
    collections: {
        edges: [{
            node: {
                handle: string,
                title: string,
                products: Products
            }
        }]
    }
}

export type Products = {
    products: {
        edges: [{
            node: {
                title: string,
                handle: string
            }
        }]
    }
}

export type NavBarItem = {
    title: string,
    handle: string,
}

export const COLLECTIONS_QUERY = gql`
    query CollectionsQuery($cursor: String){
        collections(first:20, after: $cursor) {
            edges {
                node {
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