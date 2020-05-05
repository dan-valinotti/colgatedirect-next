import styled from 'styled-components';
import { ListItem } from '@material-ui/core';

const Container = styled.div`
  padding: 15px;
  width: 100%;

  * {
    max-width: 100%;
  }
`;

const ItemContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  min-width: 500px;
  
  h6 {
    font-size: 1rem;
    flex-basis: 15%;
    text-align: right;
  }
  
  h6:first-child {
    flex-basis: 50%;
    text-align: left;
  }
  
  div {
    flex-basis: 15%;
  }

  @media only screen and (max-width: 500px) {
    display: grid; 
    min-width: 400px;
    grid-gap: 1 em;
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 200px;
    align-items: left;
    justify-content: left;
    margin-bottom: 35px;


    .quantityButton {
      grid-column: 1;
      grid-row: 2 / 2;
      align-text: left
    }
    .itemPrice {
      grid-column: 2;
      grid-row: 2 / 2;
      align-text: right;
    }
    .itemName{
      grid-column: 1;
      grid-row: 1 / 2;
    }
    

  }
`;

const TotalContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 500px;
  grid-template-columns: 200px;

  h6 {
    font-size: 1rem;
  }
`;

const CartListItem = styled.div`
  padding-top: 15px;

  border-top: 1px solid rgba(0,0,0,0.4);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .totalTitle {
    text-align: left;
  }

  .total {
    grid-column: 2 / 2;
    text-align: right;
  }
  @media only screen and (max-width: 400px) {
    width: 70%;
  }
`;

export const Styled = {
  Container,
  ItemContainer,
  TotalContainer,
  CartListItem,
};
