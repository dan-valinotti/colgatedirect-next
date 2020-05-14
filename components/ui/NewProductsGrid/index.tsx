import React, { FunctionComponent, useState, useEffect } from 'react';
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

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(20);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    if (productsData) {
      setNumPages(Math.ceil(productsData.products.edges.length / perPage));
    }
  }, [productsData, numPages, perPage]);

  // Fix this once we get number of pages
  const nextPage = () => (currentPage !== numPages - 1 && setCurrentPage(currentPage + 1));
  const prevPage = () => (currentPage !== 0 && setCurrentPage(currentPage - 1));

  return (
    <Styled.Container>
      <Styled.Grid>
        {productsData
          && productsData.products.edges
            .filter(({ node }) => node.images.edges.length > 0)
            .slice(
              currentPage * perPage,
              (currentPage * perPage) + (perPage),
            ).map(({ node }, key) => {
              const imageSrc = node.images.edges[0].node.transformedSrc;
              const formattedPrice = `${parseInt(node.priceRange.maxVariantPrice.amount, 10).toFixed(2)}`;
              if (imageSrc !== '') {
                return (
                  <NewProductThumbnail
                    key={key}
                    title={node.title}
                    handle={node.handle}
                    price={formattedPrice}
                    image={imageSrc}
                  />
                );
              }
            })}
        {productsError && (
          <p>
            There was an error retrieving the product collection.
          </p>
        )}
      </Styled.Grid>
      <button type="button" onClick={prevPage}>Previous</button>
      <p>{currentPage}</p>
      <button type="button" onClick={nextPage}>Next</button>
    </Styled.Container>
  );
};
export default NewProductsGrid;
