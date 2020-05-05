import styled from 'styled-components';
import { ListItem } from '@material-ui/core';

const Container = styled.div`
  padding: 15px;
  width: 100%;

  * {
    max-width: 100%;
    font-family: 'Colgate Ready', serif;
  }
  
  h6 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  ul > li {
    height: min-content;
    > div {
      height: 100%;
    }
  }
`;

const ItemContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 95vw;
  height: 3rem;
  
  h6 {
    font-size: 0.9rem;
    flex-basis: 15%;
    text-align: right;
    
    @media screen and (min-width: 375px) {
      font-size: 1rem;
    }
  }
  
  h6:first-child {
    flex-basis: 50%;
    text-align: left;
  }
  
  div {
    flex-basis: 15%;
  }
  
  @media screen and (min-width: 1024px) {
    min-width: 500px; 
  }

  @media only screen and (max-width: 500px) {
    display: grid;
    width: 100%; 
    grid-row-gap: 1em;
    grid-template-columns: 75% 25%;
    align-items: flex-start;
    justify-content: left;
    margin-bottom: 35px;


    .quantityButton {
      grid-column: 1;
      grid-row: 2 / 2;
      text-align: left
    }
    .itemPrice {
      grid-column: 2;
      grid-row: 1 / 2;
      text-align: right;
      font-weight: bold;
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
  width: 100%;
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
`;

const ButtonContainer = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  button {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

export const Styled = {
  Container,
  ItemContainer,
  TotalContainer,
  CartListItem,
  ButtonContainer,
};
