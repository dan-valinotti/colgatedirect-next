import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ProductsType, PRODUCTS_QUERY } from '../../../common/queries/products';
import { Styled } from './_styles';
import NewProductThumbnail from '../NewProductThumbnail/index';
import Paginator from '../Paginator';

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
  const [numPages, setNumPages] = useState<number>(0);
  const [filteredTotal, setFilteredTotal] = useState<any[]>(undefined);

  useEffect(() => {
    if (productsData) {
      setFilteredTotal(productsData.products.edges
        .filter(
          ({ node }) => node.images.edges.length > 0,
        ));
    } if (filteredTotal !== undefined) {
      setNumPages(Math.ceil(filteredTotal.length / perPage));
    }
  }, [productsData, numPages, perPage, filteredTotal]);

  // Fix this once we get number of pages
  const nextPage = () => (currentPage !== numPages - 1 && setCurrentPage(currentPage + 1));
  const prevPage = () => (currentPage !== 0 && setCurrentPage(currentPage - 1));

  return (
    <Styled.Container>
      <Styled.Grid>
        {productsData && filteredTotal
          && (
            <>
              {filteredTotal
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
              <Paginator
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                total={filteredTotal.length}
                perPage={perPage}
              />
            </>
          )}
        {productsError && (
          <p>
            There was an error retrieving the product collection.
          </p>
        )}
      </Styled.Grid>
    </Styled.Container>
  );
};
export default NewProductsGrid;
