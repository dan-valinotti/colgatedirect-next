import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { Heading } from '../../ui/Typography/index';
import NewProductsGrid from '../../ui/NewProductsGrid/index';

const CollectionSection: FunctionComponent = () => (
  <Styled.Container>
    <Heading tag="h1">Collections</Heading>
    <NewProductsGrid />
  </Styled.Container>
);

export default CollectionSection;
