import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import { Styled } from './_styles';
import { FeaturedType } from './_types';

type Props = {
  featured: FeaturedType[];
  render: Function;
};

const FeaturedProducts: FunctionComponent<Props> = ({ featured, render }: Props) => (
  <Styled.Container>
    <Styled.Title variant="h5">Featured Products</Styled.Title>
    <Grid container spacing={2} justify="center">
      {featured.map(({ node }, key) => render({ node }, key))}
    </Grid>
  </Styled.Container>
);

export default FeaturedProducts;
