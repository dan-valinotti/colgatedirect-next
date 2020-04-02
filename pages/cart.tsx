import React from 'react';
import Head from 'next/head';
import { Typography, withTheme } from '@material-ui/core';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import withData from '../lib/apollo';
import NavBar from '../components/NavBar/NavBar';
import {
  CREATE_CART,
  CreateCartResponse,
  GetCartRequest,
  GET_CART_QUERY,
  CreateCartRequest,
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION,
} from '../components/CartController/_types';

// import { GET_CART_QUERY , GetCartResponse } from '../components/CartContentRow/_types';

import CartContentRow from '../components/CartContentRow/CartContentRow';
import CartData from '../components/CartContent/CartData';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import { withMuiApp } from '../hocs/withMui';


const CartPage = () => {
  const router = useRouter();
  const { total }: ParsedUrlQuery = router.query;
  /* const { loading, error, data } = useQuery(
    GET_CART_QUERY
  ); */
  // parseFloat(total.toString())

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar items={['test']} />
      <PageContainer paddingTop={30} size={PageSize.medium}>
        <Typography variant="h3">Cart</Typography>
        <CartData parentComponent="CartOverview" />
      </PageContainer>
    </>
  );
};

export default withMuiApp(withTheme(withData(CartPage)));
