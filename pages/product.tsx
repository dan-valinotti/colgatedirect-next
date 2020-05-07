import React from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/core';
import PDPComponent from '../components/PDPComponent';
import { theme } from '../views/theme';
import { withMuiApp } from '../hocs/withMui';
import FooterNav from '../components/FooterNav';
import NavBar from '../components/ui/NavBar/index';
import { withApollo } from '../lib/apollo';
import { PageContainer } from '../components/ui/PageContainer';

const ProductPage = () => {
  const router = useRouter();
  const { handle }: ParsedUrlQuery = router.query;

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <PageContainer
        maxWidth={1100}
        mx="auto"
        pt={120}
      >
        <PDPComponent handle={handle.toString()} />
      </PageContainer>
      <FooterNav />
    </ThemeProvider>
  );
};

export default withMuiApp(withTheme(withApollo({ ssr: true })(ProductPage)));
