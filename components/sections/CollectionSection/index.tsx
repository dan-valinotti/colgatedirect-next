import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { Heading } from '../../ui/Typography/index';
import NewProductsGrid from '../../ui/NewProductsGrid/index';
import SortProducts from '../../Collections/SortProducts'

const CollectionSection: FunctionComponent = () => (
  <Styled.Container>
    <Heading tag="h1">Collections</Heading>
    <SortProducts />
    <Styled.GridContainer>
      <NewProductsGrid />
    </Styled.GridContainer>
  </Styled.Container>
);

export default CollectionSection;
