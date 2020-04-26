import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  Grid, Typography,
} from '@material-ui/core';
import featuredProducts from './featured.json';
import { ProductSortKeys } from '../../../models';
import { ProductsType, PRODUCTS_QUERY } from './_types';
import ProductThumbnail from '../ProductThumbnail';
import { Styled } from './_styles';
import FeaturedProducts from '../../sections/FeaturedProducts';

type Props = {
  query: string;
  reverse: boolean;
  sortKey: ProductSortKeys;
  variables: object;
};

function ProductsGrid({ variables }: Props) {
  // Query gets list of products and information
  const {
    data,
    loading: productsLoading,
    error: productsError,
  } = useQuery<ProductsType, object>(
    PRODUCTS_QUERY,
    { variables },
  );

  function renderGridItems({ node }, key) {
    const images = node.images.edges;
    const imageSrc = images.length ? images[0].node.transformedSrc : '';
    const altText = images.length ? images[0].node.altText : '';

    if (imageSrc !== '') {
      return (
        <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
          <ProductThumbnail
            id={node.id}
            title={node.title}
            priceRange={node.priceRange}
            handle={node.handle}
            imageSrc={imageSrc}
            altText={altText}
            variantId={node.variants.edges[0].node.id}
          />
        </Grid>
      );
    }
  }

  return (
    <Styled.Container>
      {productsError && (
        <Typography variant="body1">{productsError.message}</Typography>
      )}
      {data && (
        <>
          <FeaturedProducts
            render={renderGridItems}
            featured={data.products.edges.filter(
              ({ node }) => featuredProducts.includes(node.handle),
            )}
          />
          <Styled.Title variant="h5">All Products</Styled.Title>
          <Grid container spacing={2}>
            {data.products.edges.map(renderGridItems)}
          </Grid>
        </>
      )}
    </Styled.Container>
  );
}

export default ProductsGrid;
