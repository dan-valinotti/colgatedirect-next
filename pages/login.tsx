import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/core';
import Head from 'next/head';
import NavBar from 'components/ui/NavBar';
import { theme } from '../views/theme';
import { withMuiApp } from '../hocs/withMui';
import LoginForm from '../components/LoginForm';
import FooterNav from '../components/FooterNav';
import { withApollo } from '../lib/apollo';

const LoginPage = () => (
  <>
    <Head>
      <title>Log In | ShopSmiles® by Colgate</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    <LoginForm />
    <FooterNav />
  </>
);

export default withMuiApp(withTheme(withApollo({ ssr: true })(LoginPage)));
