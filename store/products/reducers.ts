import { Reducer } from 'redux';
import { ProductsState, ProductActionTypes } from './types';

export const initialState: ProductsState = {
  loading: true,
  error: null,
  data: null,
};

const reducer: Reducer<ProductsState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.GET_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: null,
        data: null,
      };
    case ProductActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ProductActionTypes.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { reducer as productsReducer };
