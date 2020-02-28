// REDUX - Product store definition
import { createSlice } from '@reduxjs/toolkit';
import { ProductsFragment } from '../models';

export interface ProductsState {
  // firstPage: {
  //     loading: boolean,
  //     error: Error
  // },
  // nextPage: {
  //     loading: boolean,
  //     error: Error
  // },
  loading: boolean;
  error: Error;
  data: ProductsFragment;
}

interface ProductsAction {
  payload: {
    error?: Error;
    data?: ProductsFragment;
  };
}

const initialState = {
  // firstPage: {
  //     loading: true,
  //     error: null
  // },
  // nextPage: {
  //     loading: false,
  //     error: null
  // },
  loading: true,
  error: null,
  data: null,
};

export default createSlice({
  name: 'products',
  initialState,
  reducers: {
    getFirstPageRequest: () => initialState,
    getFirstPageFailure: (state: ProductsState, { payload }: ProductsAction) => {
      state.loading = false;
      state.error = payload.error;
    },
    getFirstPageSuccess: (state: ProductsState, { payload }: ProductsAction) => {
      state.loading = false;
      state.data = payload.data;
    },
    getNextPageRequest: (state: ProductsState) => {
      state.loading = true;
      state.error = null;
    },
    getNextPageFailure: (state: ProductsState, { payload }: ProductsAction) => {
      state.loading = false;
      state.error = payload.error;
    },
    getNextPageSuccess: (state: ProductsState, { payload }: ProductsAction) => {
      state.loading = false;
      state.data.edges = state.data.edges.concat(payload.data.edges);
      state.data.pageInfo.hasNextPage = payload.data.pageInfo.hasNextPage;
    },
  },
});
