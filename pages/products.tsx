import React from 'react';
import {ProductSortKeys} from '../models';
import Products from 'components/Products/Products';
import {withApollo} from "../services/apollo";
import Head from "next/head";
import PageContainer, {PageSize} from "~viewsLay/PageContainer";
import NavBar from "../components/NavBar/NavBar";

interface Props {
    query: string,
    reverse: boolean,
    sortKey: ProductSortKeys,
    sortIndex: number, 
    variables: object
}

function ProductsPage({ query, reverse, sortKey, variables }: Props) {
    return (
        <>
            <Head>
                <title>Products</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <NavBar items={["test"]}/>
            <PageContainer size={PageSize.large}>
                <Products query={query} reverse={reverse} sortKey={sortKey} variables={variables}/>
            </PageContainer>
        </>
    );
}

export default withApollo({ssr: true})(ProductsPage);
