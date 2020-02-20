import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import products from './products.slice';

export const actions = {
    products: products.actions
};

const rootReducer = combineReducers({
    products: products.reducer
});

export function createStore(initState = {}): Store {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initState
    })
};
