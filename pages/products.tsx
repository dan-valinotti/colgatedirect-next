import React from 'react';
import { ProductSortKeys } from '../models';
import Products from 'components/Products/Products';

interface Props {
    query: string,
    reverse: boolean,
    sortKey: ProductSortKeys,
    sortIndex: number, 
    variables: object
}

function ProductsPage({ query, reverse, sortKey, variables }: Props) {
    return <Products query={query} reverse={reverse} sortKey={sortKey} variables={variables}/>;
}

export default ProductsPage;
