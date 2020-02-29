import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

type Props = {
  title?: string;
  children: React.ReactNode;
};

const MainLayout: FunctionComponent<Props> = ({ title, children }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}

    <Footer />
  </div>
);

export default MainLayout;
