import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'isomorphic-unfetch';
import 'typeface-roboto';
import 'react-multi-carousel/lib/styles.css';
import '../styles/main.scss';

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
  font-family: 'Colgate Ready Bold', serif;
}
`;

interface Props {
  Component: any;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: Props) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
