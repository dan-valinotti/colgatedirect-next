import React, { FunctionComponent, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ProductsType, PRODUCTS_QUERY } from '../../../common/queries/products';
import { Styled } from './_styles';
import NewProductThumbnail from '../NewProductThumbnail/index';

const NewProductsGrid: FunctionComponent = () => {
  const {
    data: productsData,
    error: productsError,
  } = useQuery<ProductsType, object>(
    PRODUCTS_QUERY,
    {},
  );

  useEffect(() => {
    if (productsData) console.log(productsData);
    if (productsError) console.log(productsError);
  }, [productsData, productsError]);

  return (
    <Styled.Container>
      <Styled.Grid>
        {productsData && productsData.products.edges.map(({ node }, key) => {
          const imageSrc = (node.images.edges.length > 0
            ? node.images.edges[0].node.transformedSrc
            : ''
          );
          return (
            <NewProductThumbnail
              key={key}
              title={node.title}
              handle={node.handle}
              price={node.priceRange.maxVariantPrice.amount}
              image={imageSrc}
            />
          );
        })}
        {productsError && (
          <p>Error!</p>
        )}
      </Styled.Grid>
    </Styled.Container>
  );
};
export default NewProductsGrid;
