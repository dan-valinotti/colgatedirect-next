import styled from 'styled-components';
import { ListItem } from '@material-ui/core';

const Container = styled.div`
  padding: 15px;
  width: min-content;
  margin-right: auto;
  margin-left: auto;
`;

const ItemContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 500px;
  
  h6 {
    font-size: 1rem;
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

export const Styled = {
  Container,
  ItemContainer,
  CartListItem,
  ProductImg,
};
