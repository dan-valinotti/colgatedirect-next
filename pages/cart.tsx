import React from 'react';
import Head from 'next/head';
import { Typography, withTheme } from '@material-ui/core';
import NavBar from 'components/ui/NavBar';
import { PageContainer } from 'components/ui/PageContainer';
import CartData from '../components/CartData';
import { withMuiApp } from '../hocs/withMui';
import { withApollo } from '../lib/apollo';

const CartPage = () => (
  <>
    <Head>
      <title>Cart | ShopSmiles® by Colgate</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    <PageContainer
      maxWidth="100%"
      mx="auto"
      pt={90}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <Typography variant="h3" align="center">Cart</Typography>
        <CartData parentComponent="CartOverview" />
      </div>
    </PageContainer>
  </>
);

export default withMuiApp(withTheme(withApollo({ ssr: true })(CartPage)));
