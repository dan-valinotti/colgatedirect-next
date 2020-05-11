import { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import CssBaseline from '@material-ui/core/CssBaseline';
import 'isomorphic-unfetch';
import 'typeface-roboto';
import 'react-multi-carousel/lib/styles.css';
import '../styles/main.scss';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Colgate Ready';
  font-weight: 400;
  src: url('/static/fonts/colgate-regular.otf') format("truetype");
}
@font-face {
  font-familty: 'Colgate Ready Bold';
  font-weight: 700;
  src: url('/static/fonts/colgate-bold.otf') format("truetype");
}
@font-face {
  font-family: 'Colgate Ready Light';
  font-weight: 100;
  src: url('/static/fonts/colgate-light.otf') format("truetype");
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  font-family: 'Colgate Ready', serif;
}
p {
  font-weight: 400;
  font-family: 'Colgate Ready', serif;
}
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
