import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid } from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import { ProductSortKeys } from '../../models';
import { ProductsType, PRODUCTS_QUERY } from './_types';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import './_style.scss';

type Props = {
  query: string;
  reverse: boolean;
  sortKey: ProductSortKeys;
  variables: object;
};

function Products({ variables }: Props) {
  const { loading, error, data } = useQuery<ProductsType, object>(
    PRODUCTS_QUERY,
    { variables },
  );

  return (
    <div>
      {loading && <div>Loading...</div>}

      {error && <div>{error.message}</div>}

      {data && (
        <>
          <Grid container spacing={2}>
            {data.products.edges.map(({ node }, key) => {
              const images = node.images.edges;
              const imageSrc = images.length ? images[0].node.transformedSrc : '';
              const altText = images.length ? images[0].node.altText : '';

              if (imageSrc !== '') {
                return (
                  <Grid key={key} item xs={12} sm={6} md={4} lg={3} className="product">
                    <LazyLoad height={325}>
                      <ProductThumbnail
                        id={node.id}
                        title={node.title}
                        priceRange={node.priceRange}
                        handle={node.handle}
                        imageSrc={imageSrc}
                        altText={altText}
                      />
                    </LazyLoad>
                  </Grid>
                );
              }
            })}
          </Grid>
        </>
      )}
    </div>
  );
}

export default Products;
