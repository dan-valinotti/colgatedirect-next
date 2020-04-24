import React from 'react';
import Head from 'next/head';
import { withTheme } from '@material-ui/core';
import { useRouter } from 'next/router';
import ProductsGrid from '../components/ProductsGrid';
import { ProductSortKeys } from '../models';
import withData from '../lib/apollo';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import NavBar from '../components/NavBar/NavBar';
import HeroBanner from '../components/sections/HeroBanner';
import { withMuiApp } from '../hocs/withMui';
import FooterNav from '../components/FooterNav';
import PageContentSection from '../components/sections/PageContentSection';

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
  const router = useRouter();

  const goToRoute = (href: string) => {
    router.push(href)
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <NavBar />
      <HeroBanner
        title="ShopSmiles by Colgate®"
        subtitle="The next generation of dental care is here."
        bgColor="#a2c1d3"
        bgUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/colgate_smile_like_you_mean_it2.jpg?v=1553710726"
        fontColor="#ffffff"
        textAlign="right"
        shopNow={false}
      />
      <PageContainer paddingTop={30} size={PageSize.large}>
        <PageContentSection
          alignContent="right"
          backgroundColor="#fafafa"
          ctaButton
          ctaButtonText="Learn more"
          ctaOnClick={() => goToRoute('/login')}
          imageUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/colgate_the_future_looks_bright.png?v=1553689448"
          title="The future looks bright"
          subtitle="That’s because we’ve been busy creating smarter, better devices to get your teeth shining brighter and whiter."
          alignWithEdge
          titleColor="primary"
        />
        <ProductsGrid query={query} reverse={reverse} sortKey={sortKey} variables={variables} />
      </PageContainer>
      <FooterNav />
    </>
  );
}

export default withMuiApp(withTheme(withData(ProductsPage)));
