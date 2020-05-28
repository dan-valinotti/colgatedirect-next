import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ProductsType, PRODUCTS_QUERY } from '../../../common/queries/products';
import { Styled } from './_styles';
import NewProductThumbnail from '../NewProductThumbnail/index';
import Paginator from '../Paginator';
import { Styled as StyledGrid } from '../../sections/CollectionSection/_styles';
import { Styled as NavBarStyle } from '../NavBarItem/_styles';
import { SortStyled } from '../../Collections/_styles';


const NewProductsGrid: FunctionComponent = () => {
  const {
    data: productsData,
    error: productsError,
  } = useQuery<ProductsType, object>(
    PRODUCTS_QUERY,
    {},
  );

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(8);
  const [numPages, setNumPages] = useState<number>(0);
  const [filteredTotal, setFilteredTotal] = useState<any[]>(undefined);

  // Cursor hover over the sort button
  const [hover, setHover] = useState<boolean>(false);

  // Fix this once we get number of pages
  const nextPage = () => (currentPage !== numPages - 1 && setCurrentPage(currentPage + 1));
  const prevPage = () => (currentPage !== 0 && setCurrentPage(currentPage - 1));

  // Sorts products from lowest to highest price
  const sortLowToHigh = () => {
    const tempFilteredTotal = [].concat(filteredTotal);
    setFilteredTotal(tempFilteredTotal.sort((a, b) => a.node.priceRange.maxVariantPrice.amount - b.node.priceRange.maxVariantPrice.amount));
  };

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    if (productsData && !filteredTotal) {
      setFilteredTotal(productsData.products.edges
        .filter(
          ({ node }) => (
            node.images.edges.length > 0 && node.priceRange.minVariantPrice.amount > 0),
        ));
    } if (filteredTotal !== undefined) {
      setNumPages(Math.ceil(filteredTotal.length / perPage));
    }
  }, [productsData, numPages, perPage, filteredTotal]);

  return (
    <>
      <NavBarStyle.Container
        onFocus={handleMouseOver}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className="sort"
      >
        <NavBarStyle.RootNavButton
          hovered={hover}
        >
          <h4>Sort by:</h4>
        </NavBarStyle.RootNavButton>
        <NavBarStyle.SubItemContainer
          onFocus={handleMouseOver}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          hovered={hover}
        >
          <SortStyled.SubItem>
            <button onClick={() => sortLowToHigh()} type="button">
              {console.log(filteredTotal)}
              <span>Low to High</span>
            </button>
          </SortStyled.SubItem>
        </NavBarStyle.SubItemContainer>
      </NavBarStyle.Container>
      <Styled.Container>
        {productsData && filteredTotal
        && (
          <>
            <Styled.Grid>
              {filteredTotal
                .slice(
                  currentPage * perPage,
                  (currentPage * perPage) + (perPage),
                ).map(({ node }, key) => {
                  const imageSrc = node.images.edges[0].node.transformedSrc;
                  const formattedPrice = `${parseFloat(node.priceRange.maxVariantPrice.amount).toFixed(2)}`;
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
            </Styled.Grid>
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
      </Styled.Container>
    </>
  );
};
export default NewProductsGrid;
