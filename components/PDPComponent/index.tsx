import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import Head from 'next/head';
import { Styled } from './_styles';
import { PRODUCT_INFO_QUERY, ProductDetails, TransformedProduct } from './_types';
import ProductDetail from '../sections/ProductDetail';
import PageContainer, { PageSize } from '../../views/layouts/PageContainer';
import products from './customProductPages.json';
import CustomPDPController from '../CustomPDPController';

type Props = {
  /**
   * Product handle used as a reference to retrieve the data from Shopify's API.
   * */
  handle: string;
};

/**
 * Wrapper component that renders either a custom PDP if the product is
 * included in the list of custom PDP products, or the default PDP layout.
 */
const PDPComponent: FunctionComponent<Props> = ({ handle }: Props) => {
  let product: TransformedProduct = null;
  const customPdps = products;

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
      priceV2: data.productByHandle.priceRange.minVariantPrice,
      variants: data.productByHandle.variants,
      variant: data.productByHandle.variants.edges[0].node,
    });
  }

  if (!loading && !error && data) {
    product = extractProduct();
  }

  return (
    <>
      {!error && product && (
        <div id="pdp-component">
          <Head>
            <title>{product.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          { customPdps.products.includes(product.handle) ? (
            <CustomPDPController handle={product.handle} PDPprops={{ product }} />
          ) : (
            <PageContainer size={PageSize.medium} paddingTop={45}>
              <Styled.PDPContainer>
                <Styled.PDPMain>
                  <Link href="/">
                    <Button id="back-btn" variant="outlined" color="secondary">Back</Button>
                  </Link>
                  <ProductDetail product={product} />
                </Styled.PDPMain>
              </Styled.PDPContainer>
            </PageContainer>
          )}
        </div>
      )}
    </>
  );
};

export default PDPComponent;
