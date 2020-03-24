import React from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/core';
import withData from '../lib/apollo';
import NavBar from '../components/NavBar/NavBar';
import PDPComponent from '../components/PDPComponent/PDPComponent';
import { theme } from '../views/theme';
import { withMuiApp } from '../hocs/withMui';

const ProductPage = () => {
  const router = useRouter();
  const { handle }: ParsedUrlQuery = router.query;

  return (
    <ThemeProvider theme={theme}>
      <NavBar items={['test']} />
      <PDPComponent handle={handle.toString()} />
    </ThemeProvider>
  );
};

export default withMuiApp(withTheme(withData(ProductPage)));
