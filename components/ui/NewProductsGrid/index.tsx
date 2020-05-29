import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ProductsType, PRODUCTS_QUERY } from '../../../common/queries/products';
import { Styled } from './_styles';
import NewProductThumbnail from '../NewProductThumbnail/index';
import Paginator from '../Paginator';
import { Styled as NavBarStyled } from '../NavBarItem/_styles';
import { SortStyled } from '../../Collections/_styles';
import { Styled as GridStyled } from '../../sections/CollectionSection/_styles';


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
  // If sorting from low to high, arg = true, high to low then arg = false
  const sortByPrice = (isLowToHigh) => {
    const tempFilteredTotal = [].concat(filteredTotal);
    if (isLowToHigh) {
      setFilteredTotal(tempFilteredTotal.sort((a, b) => a.node.priceRange.maxVariantPrice.amount - b.node.priceRange.maxVariantPrice.amount));
    } else {
      setFilteredTotal(tempFilteredTotal.sort((a, b) => b.node.priceRange.maxVariantPrice.amount - a.node.priceRange.maxVariantPrice.amount));
    }
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
      <NavBarStyled.Container
        onFocus={handleMouseOver}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className="sort"
      >
        <NavBarStyled.RootNavButton
          hovered={hover}
        >
          <h4>Sort by:</h4>
        </NavBarStyled.RootNavButton>

        <NavBarStyled.SubItemContainer
          onFocus={handleMouseOver}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          hovered={hover}
        >
          <NavBarStyled.SubItem onClick={() => sortByPrice(true)}>
            <span>Low to High</span>
          </NavBarStyled.SubItem>
          <NavBarStyled.SubItem onClick={() => sortByPrice(false)}>
            <span>High to Low</span>
          </NavBarStyled.SubItem>
        </NavBarStyled.SubItemContainer>
      </NavBarStyled.Container>
      <GridStyled.GridContainer>
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
      </GridStyled.GridContainer>
    </>
  );
};
export default NewProductsGrid;
