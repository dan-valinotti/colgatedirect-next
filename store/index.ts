import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
// import products from './products.slice';
import { ProductActionTypes } from '../services/actions/products.actions';
import {productsReducer} from '../store/products/reducers';

// export const actions = {
//     products: products.actions
// };

const rootReducer = combineReducers({
    products: productsReducer
});

export function createStore(initState = {}): Store {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initState
    })
};

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
