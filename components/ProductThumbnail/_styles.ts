import styled from 'styled-components';
import { Button, Paper, Typography } from '@material-ui/core';

const ProductContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 350px;
  width: 100%;
  padding: 10px;
`;

const ProductTitle = styled(Typography)`
  text-align: center;
  padding: 0 5px 15px;
  flex-basis: 25%;
`;

const ProductPrice = styled(Typography)`
  text-align: center;
  flex-basis: 25%;
`;

const ProductImgThumbnail = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  margin-bottom: 15px;
`;

const ProductATCContainer = styled.div`
  display: flex;
`;

const ProductImg = styled.img`
  width: auto;  
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

const ProductButton = styled(Button)`
  &&& {
    margin: 0 auto 15px;
    flex-basis: 46%;
  }
`;

export const Styled = {
  ProductContainer,
  ProductTitle,
  ProductPrice,
  ProductImgThumbnail,
  ProductATCContainer,
  ProductImg,
  ProductButton,
};
