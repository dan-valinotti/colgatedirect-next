import styled from 'styled-components';
import { ListItem, Button } from '@material-ui/core';

const Container = styled.div`
  
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  display: grid; 
  align-items: center;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  
`;

// grid-template-columns: 100%;
// grid-template-rows: 100%;
const ItemContainer = styled.div`
  align-items: center;
  width: 100%;
  display: grid; 
  grid-template-columns: repeat(4, 1fr);
  text-align: left;
  grid-gap: 1em;
  flex-wrap: wrap;
  
  h6 {
    font-size: 1rem;
  }

  .itemName {
    text-align: left;
  }

  .itemPrice {
    text-align: center;

  }

  .quantityButtons {
    text-align: right;
    
  }

  @media only screen and (max-width: 500px) {
    display: grid; 
    grid-gap: 1 em;
    grid-template-columns: repeat(2, 1fr);

    .itemName {
      grid-column: 2;
      grid-row: 1 / 2;
      text-align: left;
    }

    .itemPrice {
      grid-column: 2;
      grid-row: 2 / 2;
      text-align: left;
    }
  
    .quantityButtons {
      grid-column: 1;
      grid-row: 2 / 2;
      text-align: left;
    }

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
  width: 80%;
  margin-bottom: 15px;
 
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 15px;
`;
const QuantityButtons = styled.div`
 justify-content: center;
 flex-wrap: wrap;
 `;
const ButtonContainer = styled.div`
  display: flex;

`;

const EmptyCartButton = styled(Button)`
&&& {
  margin: 0 auto 15px;
  flex-basis: 46%;
}
`;

export const Styled = {
  Container,
  ItemContainer,
  CartListItem,
  ProductImg,
  ProductImgThumbnail,
  ProgressContainer,
  ButtonContainer,
  QuantityButtons,
  EmptyCartButton,
};
