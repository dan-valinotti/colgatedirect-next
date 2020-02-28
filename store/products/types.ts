import gql from 'graphql-tag';
import { ProductsFragment } from '../../models';

export interface ProductsState {
  loading: boolean;
  error: Error;
  data: ProductsFragment;
}

export enum ProductActionTypes {
  GET_PRODUCT = 'GET_PRODUCT',
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'
}

export interface ProductBaseAction {
  type: ProductActionTypes;
}

export interface GetProductsAction {
  type: ProductActionTypes.GET_PRODUCTS;
  loading: true;
  data: ProductsFragment;
}

export interface GetProductsSuccess {
  type: ProductActionTypes.GET_PRODUCTS_SUCCESS;
  loading: false;
  data: ProductsFragment;
}
export interface GetProductsFailure {
  type: ProductActionTypes.GET_PRODUCTS_FAILURE;
  loading: false;
  error: Error;
}

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
  query products($cursor: String, $query: String!, $sortKey: ProductSortKeys!, $reverse: Boolean!) {
    products(first: 12, after: $cursor, query: $query, sortKey: $sortKey, reverse: $reverse) {
      ...products
    }
  }
`;
