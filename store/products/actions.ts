import { action } from 'typesafe-actions';
import { ProductsState, ProductActionTypes, ProductBaseAction, GetProductsAction, GetProductsSuccess, GetProductsFailure } from './types';
import { ProductsFragment } from '../../models/shopify.model';

export const getProducts = () => action(ProductActionTypes.GET_PRODUCTS);

export const getProductsSuccess = ({data}: GetProductsSuccess) => action(ProductActionTypes.GET_PRODUCTS_SUCCESS, data);
export const getProductsFailure = ({error}: GetProductsFailure) => action(ProductActionTypes.GET_PRODUCTS_FAILURE, error);
