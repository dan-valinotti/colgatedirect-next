// REDUX - Product action definition
import { gql } from 'apollo-boost';
import { shopify } from './apis.service';
import { ProductsQueryVariables } from '../models';
import * as actions from '../store/products/actions'
import { ProductActionTypes } from '../store/products/types';

const PRODUCTS_FRAGMENT = gql`
  fragment products on ProductConnection {
    edges {
      node {
        title
        handle
        description
        createdAt
        images(first: 1) {
          edges {
            node {
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
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
`;

export const PRODUCTS_QUERY = gql`
  ${PRODUCTS_FRAGMENT}
  query products($reverse: Boolean!) {
    products(first: 12, reverse: $reverse) {
      ...products
    }
  }
`;

export function getFirstPage(variables: ProductsQueryVariables) {
  return async dispatch => {
    try {
      dispatch(actions.getProducts());

      const { data } = await shopify.query({
        query: PRODUCTS_QUERY,
        variables
      });

      dispatch(actions.getProductsSuccess({ type: ProductActionTypes.GET_PRODUCTS_SUCCESS, loading: false, data: data.products }));
    } catch (error) {
      dispatch(actions.getProductsFailure({ type: ProductActionTypes.GET_PRODUCTS_FAILURE, loading: false, error }));
    }
  };
}

export function getNextPage(variables: ProductsQueryVariables) {
  return async dispatch => {
    try {
      dispatch(actions.getProducts());

      const { data } = await shopify.query({
        query: PRODUCTS_QUERY,
        variables
      });

      dispatch(actions.getProductsSuccess({ type: ProductActionTypes.GET_PRODUCTS_SUCCESS, loading: false, data: data.products }));
    } catch (error) {
      dispatch(actions.getProductsFailure({ type: ProductActionTypes.GET_PRODUCTS_FAILURE, loading: false, error }));
    }
  };
}
