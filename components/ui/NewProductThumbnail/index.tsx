import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { ThumbnailTitle, ThumbnailPrice } from '../Typography/index';

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
    <Styled.ImageContainer>
      <img src={image !== '' ? `${image}&height=160` : ''} alt={title} />
    </Styled.ImageContainer>
    <Styled.TextContainer>
      <ThumbnailTitle tag="h6">{title}</ThumbnailTitle>
      <ThumbnailPrice tag="p">${price}</ThumbnailPrice>
    </Styled.TextContainer>
  </Styled.Container>
);

export default NewProductThumbnail;
