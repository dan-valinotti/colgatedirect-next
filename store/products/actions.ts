/* eslint-disable */
import { action } from 'typesafe-actions';
import { ProductActionTypes, GetProductsSuccess, GetProductsFailure } from './types';

export const getProducts = () => action(ProductActionTypes.GET_PRODUCTS);

export const getProductsSuccess = ({ data }: GetProductsSuccess) => action(ProductActionTypes.GET_PRODUCTS_SUCCESS, data);
export const getProductsFailure = ({ error }: GetProductsFailure) => action(ProductActionTypes.GET_PRODUCTS_FAILURE, error);
