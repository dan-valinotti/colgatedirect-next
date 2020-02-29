import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { withApollo } from '../services/apollo';
import PageContainer, { PageSize } from '../views/layouts/PageContainer';
import NavBar from '../components/NavBar/NavBar';
import PDPComponent from '../components/PDPComponent/PDPComponent';

const ProductPage = () => {
  const router = useRouter();
  const { pid }: ParsedUrlQuery = router.query;

  return (
    <>
      <NavBar items={['test']} />
      <PageContainer paddingTop={30} size={PageSize.medium}>
        <PDPComponent productId={pid.toString()} />
      </PageContainer>
    </>
  );
};

export default withApollo({ ssr: true })(ProductPage);
