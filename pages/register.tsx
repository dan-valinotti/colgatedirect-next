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
import RegisterForm from '../components/RegisterForm';
import FooterNav from "../components/FooterNav";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Register | ShopSmiles® by Colgate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <RegisterForm />
      <FooterNav />
    </ThemeProvider>
  );
};

export default withMuiApp(withTheme(withData(RegisterPage)));
