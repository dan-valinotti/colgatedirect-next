import React, { FunctionComponent } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import Head from 'next/head';
import { PRODUCT_INFO_QUERY, ProductDetails, TransformedProduct } from './_types';
import ProductDetail from '../ProductDetail/ProductDetail';
import './_style.scss';

type Props = {
  productId: string;
};

const PDPComponent: FunctionComponent<Props> = ({ productId }: Props) => {
  let product: TransformedProduct = null;
  const queryVariables: object = {
    query: `product_id:'${productId}'`,
  };
  const { loading, error, data } = useQuery<ProductDetails, object>(
    PRODUCT_INFO_QUERY,
    queryVariables,
  );

  function extractProduct(): TransformedProduct {
    return ({
      id: data.products.edges[0].node.id,
      handle: data.products.edges[0].node.handle,
      title: data.products.edges[0].node.title,
      description: data.products.edges[0].node.description,
      imageSrc: data.products.edges[0].node.images.edges[0].node.transformedSrc,
      price: data.products.edges[0].node.priceRange.minVariantPrice.amount,
      variants: data.products.edges[0].node.variants,
    });
  }

  if (!loading && !error && data) {
    product = extractProduct();
  }

  return (
    <div id="pdp-component">
      {loading && (
        <Typography variant="body1">Loading...</Typography>
      )}

      {!loading && !error && product && (
        <>
          <Head>
            <title>{product.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <div id="pdp">
            <Link href="/products">
              <Button variant="outlined" color="secondary">Back</Button>
            </Link>
            <ProductDetail product={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default PDPComponent;
