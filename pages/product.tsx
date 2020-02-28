import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { withApollo } from '../services/apollo';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import NavBar from '../components/NavBar/NavBar';
import PDPComponent from '../components/PDPComponent/PDPComponent';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid);

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar items={['test']} />
      <PageContainer size={PageSize.large}>
        <PDPComponent product="1" />
      </PageContainer>
    </>
  );
};

export default withApollo({ ssr: true })(ProductPage);
