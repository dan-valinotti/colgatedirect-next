import React, { FunctionComponent } from 'react';
import ProductsGrid from 'components/ui/ProductsGrid';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import { Heading } from '../../ui/Typography/index';
import NewProductsGrid from '../../ui/NewProductsGrid/index';

type Props = {
  test?: string;
};

const CollectionSection: FunctionComponent<Props> = ({ test }: Props) => (
  <Styled.Container>
    <Heading tag="h1">Collections</Heading>
    <Styled.GridContainer>
      <NewProductsGrid />
    </Styled.GridContainer>
  </Styled.Container>
);

export default CollectionSection;
