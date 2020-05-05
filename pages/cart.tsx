import React from 'react';
import Head from 'next/head';
import { Typography, withTheme } from '@material-ui/core';
import NavBar from 'components/ui/NavBar';
import CartData from '../components/CartContent/CartData';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import { withMuiApp } from '../hocs/withMui';
import { withApollo } from '../lib/apollo';

const CartPage = () => (
  <>
    <Head>
      <title>Products</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    <PageContainer paddingTop={30} size={PageSize.medium}>
      <Typography variant="h3" align="center">Cart</Typography>
      <CartData parentComponent="CartOverview" />
    </PageContainer>
  </>
);

export default withMuiApp(withTheme(withApollo({ ssr: true })(CartPage)));
