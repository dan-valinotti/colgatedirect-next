import React from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/core';
import Head from 'next/head';
import withData from '../lib/apollo';
import NavBar from '../components/NavBar/NavBar';
import { theme } from '../views/theme';
import { withMuiApp } from '../hocs/withMui';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Log In | ShopSmiles® by Colgate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar items={['test']} />
      <LoginForm />
    </ThemeProvider>
  );
};

export default withMuiApp(withTheme(withData(LoginPage)));
