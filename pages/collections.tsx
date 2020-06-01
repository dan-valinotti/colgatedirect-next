import React from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/core';
import { PageContainer } from 'components/ui/PageContainer';
import { Heading } from 'components/ui/Typography';
import Head from 'next/head';
import CollectionSection from 'components/sections/CollectionSection';
import PDPComponent from '../components/PDPComponent';
import { theme } from '../views/theme';
import { withMuiApp } from '../hocs/withMui';
import FooterNav from '../components/FooterNav';
import NavBar from '../components/ui/NavBar/index';
import { withApollo } from '../lib/apollo';

const CollectionsPage = () => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>Collections | ShopSmiles® by Colgate</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    <PageContainer
      maxWidth="100%"
      mx="auto"
      pt={120}
      minHeight={600}
    >
      <CollectionSection />
    </PageContainer>
    <FooterNav />
  </ThemeProvider>
);

export default withMuiApp(withTheme(withApollo({ ssr: true })(CollectionsPage)));
