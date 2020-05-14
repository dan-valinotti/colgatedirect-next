import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';

type Props = {
  title: string;
  image: string;
  handle: string;
  price: string;
};

const NewProductThumbnail: FunctionComponent<Props> = ({
  title,
  image,
  handle,
  price,
}: Props) => (
  <Styled.Container>
    <h1>{title}</h1>
  </Styled.Container>
);

export default NewProductThumbnail;
