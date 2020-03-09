import React, { FunctionComponent } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import Head from 'next/head';
import { Styled } from './_styles';
import { PRODUCT_INFO_QUERY, ProductDetails, TransformedProduct } from './_types';
import ProductDetail from '../ProductDetail/ProductDetail';

type Props = {
  handle: string;
};

const PDPComponent: FunctionComponent<Props> = ({ handle }: Props) => {
  let product: TransformedProduct = null;
  const queryVariables: object = {
    handle: `${handle}`,
  };
  const { loading, error, data } = useQuery<ProductDetails, object>(
    PRODUCT_INFO_QUERY,
    {
      variables: queryVariables,
    },
  );

  function extractProduct(): TransformedProduct {
    return ({
      id: data.productByHandle.id,
      handle: data.productByHandle.handle,
      title: data.productByHandle.title,
      description: data.productByHandle.description,
      imageSrc: data.productByHandle.images.edges[0].node.transformedSrc,
      price: data.productByHandle.priceRange.minVariantPrice.amount,
      variants: data.productByHandle.variants,
    });
  }

  if (!loading && !error && data) {
    product = extractProduct();
  }

  return (
    <Styled.PDPContainer>
      {loading && (
        <Typography variant="body1">Loading...</Typography>
      )}

      {!loading && !error && product && (
        <>
          <Head>
            <title>{product.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Styled.PDPMain>
            <Link href="/">
              <Button variant="outlined" color="secondary">Back</Button>
            </Link>
            <ProductDetail product={product} />
          </Styled.PDPMain>
        </>
      )}
    </Styled.PDPContainer>
  );
};

export default PDPComponent;
