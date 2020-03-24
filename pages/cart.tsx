import React from 'react';
import Head from 'next/head';
import { Typography, withTheme } from '@material-ui/core';
import withData from '../lib/apollo';
import NavBar from '../components/NavBar/NavBar';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import { withMuiApp } from '../hocs/withMui';

const CartPage = () => (
  <>
    <Head>
      <title>Products</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar items={['test']} />
    <PageContainer paddingTop={30} size={PageSize.medium}>
      <Typography variant="h3">Cart</Typography>
    </PageContainer>
  </>
);

export default withMuiApp(withTheme(withData(CartPage)));
