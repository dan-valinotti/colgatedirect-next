import React from 'react';
import Head from 'next/head';
import { withTheme } from '@material-ui/core';
import ProductsGrid from '../components/ProductsGrid';
import { ProductSortKeys } from '../models';
import { withApollo } from '../services/apollo';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/sections/HeroBanner';

interface Props {
  query: string;
  reverse: boolean;
  sortKey: ProductSortKeys;
  sortIndex: number;
  variables: object;
}

function ProductsPage({
  query, reverse, sortKey, variables,
}: Props) {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar items={['test']} />
      <HeroBanner
        title="ShopSmiles by Colgate®"
        subtitle="The next generation of dental care is here."
        bgColor="#a2c1d3"
        bgUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/colgate_smile_like_you_mean_it2.jpg?v=1553710726"
        fontColor="#ffffff"
        textAlign="right"
      />
      <PageContainer paddingTop={30} size={PageSize.large}>
        <ProductsGrid query={query} reverse={reverse} sortKey={sortKey} variables={variables} />
      </PageContainer>
    </>
  );
}

export default withTheme(withApollo({ ssr: true })(ProductsPage));
