import { ProductActionTypes } from "services/actions/products.actions";
import { ProductsState } from '../../store/products.slice';
import { GetProductsAction } from '../actions/products.actions';

type ProductReducerActions = GetProductsAction;

const initialState = {
    loading: true,
    error: null,
    data: null
}

export default function(state: ProductsState = initialState, action: ProductReducerActions) {
    switch (action.type) {
        case ProductActionTypes.GET_PRODUCTS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.data
            };
        default:
            return state;
    }
}
