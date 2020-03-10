import React from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/core';
import { withApollo } from '../services/apollo';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import NavBar from '../components/NavBar/NavBar';
import PDPComponent from '../components/PDPComponent/PDPComponent';
import { theme } from '../views/theme';

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

export default withTheme(withApollo({ ssr: true })(ProductPage));
