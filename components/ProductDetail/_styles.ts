import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const ProductDetailContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 30px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 33%;
`;

const ProductImage = styled.img`
  padding-right: 30px;
  max-width: 100%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 66%;
  padding-top: 30px;
`;

const ProductTitle = styled(Typography)`
  padding-bottom: 15px;
`;

const ProductDescription = styled(Typography)`
`;

const ATCContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 15px;
`;

export const Styled = {
  ProductDetailContainer,
  ImageContainer,
  ProductImage,
  DescriptionContainer,
  ProductTitle,
  ProductDescription,
  ATCContainer,
  ProgressContainer,
};
