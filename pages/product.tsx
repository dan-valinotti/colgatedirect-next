import React from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/core';
import withData from '../lib/apollo';
import NavBar from '../components/ui/NavBar/NavBar';
import PDPComponent from '../components/PDPComponent';
import { theme } from '../views/theme';
import { withMuiApp } from '../hocs/withMui';
import FooterNav from '../components/FooterNav';
import NewNavBar from '../components/ui/NewNavBar/index';

const ProductPage = () => {
  const router = useRouter();
  const { handle }: ParsedUrlQuery = router.query;

  return (
    <ThemeProvider theme={theme}>
      <NewNavBar />
      <PDPComponent handle={handle.toString()} />
      <FooterNav />
    </ThemeProvider>
  );
};

export default withMuiApp(withTheme(withData(ProductPage)));
