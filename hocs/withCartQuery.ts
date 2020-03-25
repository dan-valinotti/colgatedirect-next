import { graphql } from '@apollo/react-hoc';
import { gql } from 'apollo-boost';
import { GET_CART_QUERY } from '../components/CartController/_types';

const withCartQuery = graphql(gql`
    fragment checkout on Checkout {
        id
        webUrl
        subtotalPriceV2 {
            amount
            currencyCode
        }
        totalTaxV2 {
            amount
            currencyCode
        }
        totalPriceV2 {
            amount
            currencyCode
        }
        lineItems(first: 250) {
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
            edges {
                node {
                    id
                    title
                    variant {
                        id
                        title
                        image {
                            transformedSrc
                        }
                        priceV2 {
                            amount
                            currencyCode
                        }
                    }
                    quantity
                }
            }
        }
    }
    query CheckoutQuery($checkoutId: ID!) {
        node(id: $checkoutId) {
            ... on Checkout {
                ...checkout
            }
        }
    }
`);

export default withCartQuery;
