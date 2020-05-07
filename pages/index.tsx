/* eslint-disable global-require */
import React from 'react';
import Head from 'next/head';
import { withTheme } from '@material-ui/core';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import NavBar from 'components/ui/NavBar';
import { PageContainer } from 'components/ui/PageContainer';
import ProductsGrid from '../components/ui/ProductsGrid';
import { ProductSortKeys } from '../models';
import HeroBanner from '../components/sections/HeroBanner';
import { withMuiApp } from '../hocs/withMui';
import FooterNav from '../components/FooterNav';
import { theme } from '../views/theme';
import PageContentSection from '../components/sections/PageContentSection';
import { withApollo } from '../lib/apollo';

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
      </Head>
      <NavBar />
      <PageContainer
        maxWidth="100%"
        mx="auto"
        pt={45}
      >
        <HeroBanner
          title="ShopSmiles by Colgate®"
          subtitle="The next generation of dental care is here."
          bgColor="#a2c1d3"
          bgImage={require('./images/colgate_smile_like_you_mean_it2.jpg')}
          fontColor="#ffffff"
          textAlign="right"
          shopNow={false}
        />
        <PageContentSection
          id="home-content-1"
          alignContent="right"
          backgroundColor="#fafafa"
          ctaButton={false}
          image={require('./images/colgate_the_future_looks_bright.png')}
          title="The future looks bright"
          subtitle="That’s because we’ve been busy creating smarter, better devices to get your teeth shining brighter and whiter."
          alignWithEdge
          sectionColor="primary"
        />
        <PageContentSection
          id="home-content-2"
          alignContent="left"
          backgroundColor="#efefef"
          ctaButton
          ctaButtonText="Learn more"
          ctaOnClick={() => goToRoute('/products/magik')}
          headline="NEW! MAGIK TOOTHBRUSHING EXPERIENCE"
          image={require('./images/Copy_of_guard_posing.png')}
          title="The augmented reality toothbrushing adventure your kids never knew they wanted."
          alignWithEdge={false}
          sectionColor="secondary"
        />
        <PageContentSection
          id="home-content-3"
          alignContent="right"
          backgroundColor="#efefef"
          ctaButton
          ctaButtonText="Learn more"
          ctaOnClick={() => goToRoute('/products/teeth-whitening-led-device-kit')}
          headline="TEETH WHITENING DEVICE & TREATMENT"
          image={require('./images/colgate_teeth_whitening_device-b_180x.jpg')}
          title="Light up your life with our best, blue light, teeth whitening technology."
          alignWithEdge
          sectionColor="secondary"
        />
        <PageContentSection
          id="home-content-4"
          alignContent="left"
          backgroundColor="#efefef"
          ctaButton
          ctaButtonText="Learn more"
          ctaOnClick={() => goToRoute('/products/smart-electric-toothbrush')}
          headline="SMART ELECTRIC TOOTHBRUSH"
          image={require('./images/colgate_smart_electric_toothbrush_540x.png')}
          title="Get a complete clean every time with our app-connected Smart Electric Toothbrush."
          alignWithEdge
          sectionColor="secondary"
        />
        <PageContentSection
          id="home-content-5"
          alignContent="right"
          backgroundColor="#fafafa"
          ctaButton
          ctaButtonText="Let's Chat"
          ctaOnClick={() => goToRoute('/')}
          image={require('./images/colgate_smiles_are_contagious-b_900x.jpg')}
          title="Smiles are contagious"
          titleColor={theme.palette.primary.main}
          subtitle="Our dental care products are designed with real input from people like you. Send us your thoughts, feedback, and big ideas so we can keep creating."
          alignWithEdge
          sectionColor="secondary"
        />
      </PageContainer>
      <FooterNav />
    </>
  );
}

export default withApollo({ ssr: true })(withMuiApp(withTheme(ProductsPage)));
