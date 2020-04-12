import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import products from './products.slice';
// import {productsReducer} from '../store/products/reducers';

// export const actions = {
//     checkout: checkout.actions
// };

const rootReducer = combineReducers({
  checkout: products.reducer,
});

export function createStore(initState = {}): Store {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initState,
  });
}

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
