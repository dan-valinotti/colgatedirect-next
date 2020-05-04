import React from 'react';
import Head from 'next/head';
import { Typography, withTheme } from '@material-ui/core';
import NewNavBar from 'components/ui/NewNavBar';
import withData from '../lib/apollo';
import CartData from '../components/CartContent/CartData';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import { withMuiApp } from '../hocs/withMui';


const CartPage = () => (
  <>
    <Head>
      <title>Products</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NewNavBar />
    <PageContainer paddingTop={30} size={PageSize.medium}>
      <Typography variant="h3" align="center">Cart</Typography>
      <CartData parentComponent="CartOverview" />
    </PageContainer>
  </>
);

export default withMuiApp(withTheme(withData(CartPage)));
