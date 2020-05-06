import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { Button, withTheme } from '@material-ui/core';
import Link from 'next/link';
import NavBar from 'components/ui/NavBar';
import HeroBanner from '../components/sections/HeroBanner';
import { theme } from '../views/theme';
import { withMuiApp } from '../hocs/withMui';
import FooterNav from '../components/FooterNav';
import { withApollo } from '../lib/apollo';

type Props = {
  statusCode: string;
};

function Error({ statusCode }: Props) {
  const titleMessage = () => {
    if (typeof statusCode === 'number' && statusCode === 404) {
      return 'OOPS!';
    } return 'An unknown error has occurred.';
  };
  const subtitleMessage = () => {
    if (typeof statusCode === 'number' && statusCode === 404) {
      return 'We\'re sorry, but the page you\'re looking for could not be found.';
    } return '';
  };
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Page Not Found | Colgate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <HeroBanner
        bgImage=""
        title={titleMessage()}
        subtitle={subtitleMessage()}
        bgColor="#fafafa"
        fontColor="rgba(0,0,0,0.8)"
        shopNow={false}
      />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link href="/">
          <Button variant="outlined" color="primary">
            Back to home
          </Button>
        </Link>
      </div>
      <FooterNav />
    </ThemeProvider>
  );
}

Error.getInitialProps = ({ res, err }) => {
  let statusCode: any;
  if (res) {
    statusCode = res.statusCode;
  } else {
    statusCode = err ? err.statusCode : 404;
  }
  return { statusCode };
};

export default withMuiApp(withTheme(withApollo({ ssr: true })(Error)));
