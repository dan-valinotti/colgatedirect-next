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
import { theme } from '../views/theme';

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
      <PageContainer fullWidth paddingTop={30} size={PageSize.large}>
        <PageContentSection
          alignContent="right"
          backgroundColor="#fafafa"
          ctaButton={false}
          imageUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/colgate_the_future_looks_bright.png?v=1553689448"
          title="The future looks bright"
          subtitle="That’s because we’ve been busy creating smarter, better devices to get your teeth shining brighter and whiter."
          alignWithEdge
          sectionColor="primary"
        />
        <PageContentSection
          alignContent="left"
          backgroundColor="#efefef"
          ctaButton
          ctaButtonText="Learn more"
          ctaOnClick={() => goToRoute('/products/magik')}
          headline="NEW! MAGIK TOOTHBRUSHING EXPERIENCE"
          imageUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/Copy_of_guard_posing.png?v=1556822784"
          title="The augmented reality toothbrushing adventure your kids never knew they wanted."
          alignWithEdge={false}
          sectionColor="secondary"
        />
        <PageContentSection
          alignContent="right"
          backgroundColor="#efefef"
          ctaButton
          ctaButtonText="Learn more"
          ctaOnClick={() => goToRoute('/products/teeth-whitening-led-device-kit')}
          headline="TEETH WHITENING DEVICE & TREATMENT"
          imageUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/colgate_teeth_whitening_device-b_180x.jpg?v=1553690080"
          title="Light up your life with our best, blue light, teeth whitening technology."
          alignWithEdge
          sectionColor="secondary"
        />
        <PageContentSection
          alignContent="left"
          backgroundColor="#efefef"
          ctaButton
          ctaButtonText="Learn more"
          ctaOnClick={() => goToRoute('/products/smart-electric-toothbrush')}
          headline="SMART ELECTRIC TOOTHBRUSH"
          imageUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/colgate_smart_electric_toothbrush_540x.png?v=1553689447"
          title="Get a complete clean every time with our app-connected Smart Electric Toothbrush."
          alignWithEdge
          sectionColor="secondary"
        />
        <PageContentSection
          alignContent="right"
          backgroundColor="#fafafa"
          ctaButton
          ctaButtonText="Let's Chat"
          ctaOnClick={() => goToRoute('/')}
          imageUrl="https://cdn.shopify.com/s/files/1/2524/0600/files/colgate_smiles_are_contagious-b_900x.jpg?v=1553689901"
          title="Smiles are contagious"
          titleColor={theme.palette.primary.main}
          subtitle="Our dental care products are designed with real input from people like you. Send us your thoughts, feedback, and big ideas so we can keep creating."
          alignWithEdge
          sectionColor="secondary"
        />
        <PageContainer size={PageSize.large} paddingTop={30}>
          <ProductsGrid query={query} reverse={reverse} sortKey={sortKey} variables={variables} />
        </PageContainer>
      </PageContainer>
      <FooterNav />
    </>
  );
}

export default withMuiApp(withTheme(withData(ProductsPage)));
