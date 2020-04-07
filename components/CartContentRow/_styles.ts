import styled from 'styled-components';
import { ListItem } from '@material-ui/core';

const Container = styled.div`
  padding: 15px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`;

const ItemContainer = styled.div`
  display: flex; 
  align-items: center;
  width: 100%;
  min-width: 500px;
  
  h6 {
    font-size: 1rem;
    text-align: right;
  }

  .itemName {
    flex-basis: 50%;
    text-align: left;
    margin-left: 4rem;
  }

  .itemPrice {
    text-align: right;
    margin-left: 4rem;
  }
`;

const CartListItem = styled(ListItem)`
&&& {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid rgba(0,0,0,0.4);
}
`;

const ProductImg = styled.img`
  width: auto;
  max-width: 100%;
  margin: 0 auto;
`;
const ProductImgThumbnail = styled.div`
  height: 50%;
  width: 20%;
  display: flex;
  margin-bottom: 15px;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 15px;
`;

export const Styled = {
  Container,
  ItemContainer,
  CartListItem,
  ProductImg,
  ProductImgThumbnail,
  ProgressContainer,
};
