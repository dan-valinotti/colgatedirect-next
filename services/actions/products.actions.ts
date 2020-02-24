import { ProductsFragment } from '../../models/shopify.model';
export enum ProductActionTypes {
    GET_PRODUCT = 'GET_PRODUCT',
    GET_PRODUCTS = 'GET_PRODUCTS'
};

export interface ProductBaseAction {
    type: ProductActionTypes
};
export interface GetProductsAction {
    type: ProductActionTypes.GET_PRODUCTS,
    data: ProductsFragment
}
