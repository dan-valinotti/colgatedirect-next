import React from 'react';
import services from '../services';
import isServer from 'detect-node';
import { ProductSortKeys } from '../models/shopify.model';
import Products from 'components/Products/Products';

interface Props {
    query: {
        query: string,
        reverse: boolean,
        sortKey: ProductSortKeys,
        sortIndex: number
    }
};

function ProductsPage({ query }: Props) {
    return <Products query={query} />;
};

ProductsPage.getInitialProps = async context => {
    const { store } = context;
    const { query, sortKey, sortIndex, reverse } = context.query;
    const transformedQuery = {
        query: query || '',
        sortKey: sortKey ? sortKey.toUpperCase() : ProductSortKeys.BestSelling,
        sortIndex: sortIndex ? parseInt(sortIndex) : 0,
        reverse: reverse === 'true' ? true : false
    };

    if (isServer) {
        await store.dispatch(services.products.getFirstPage(transformedQuery));
    } else {
        store.dispatch(services.products.getFirstPage(transformedQuery));
    }

    return { query: transformedQuery };
};

export default ProductsPage;
