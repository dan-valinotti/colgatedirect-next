import styled from 'styled-components';
import { Button } from '@material-ui/core';

const MainTitle = styled.a`
  color: #535353;
  font-weight: 550;
  display: block;
  font-size: 2.3em;
  text-align: center;
  margin-bottom: 15px;
`;

const ImagesContainer = styled.div`
  width: 380px;
  padding: 0 15px;
  margin-left: auto;
`;

const ItemsContainer = styled.div`
  width: 350px;
  height: 350px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
`;

const ItemContainer = styled.div`
  width: 350px;
  height: 350px;
  margin: 0 auto;
  text-align: center;
`;

const ItemAvatar = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const DotItems = styled.div`
  padding: 10px 0;
  text-align: center;
`;

const DotItem = styled.div`
  width: 11px;
  height: 11px;
  margin: 0 2px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.4s;
  display: inline-block;
  background: rgba(0, 0, 0, 0.26);
  &.active {
    background: #d9291c;
  }
`;

const ProductDescriptionItems = styled.ul`
  color: #535353;
  list-style-type: disc;
`;

const ProductDescriptionItem = styled.li`
  padding-left: 5px;
  font-size: 1.4em;
  font-weight: 400;
  margin-bottom: 8px;
  a {
    color: #0000ff;
    transition: all 0.3s;
    &:hover {
      color: #d9291c;
    }
  }
`;

const ProductPriceContainer = styled.div`
  padding-top: 10px;
  text-align: center;
`;

const ProductPrice = styled.div`
  color: #535353;
  font-size: 2.1em;
  font-weight: 550;
  margin-bottom: 15px;
`;

const AddToCardButton = styled(Button)`
  &&& {
    color: #d9291c;
    font-size: 1.3em;
    border-width: 2px;
    padding: 10px 60px;
    border-radius: 8px;
    border-color: #d9291c;
    text-transform: uppercase;
    &:hover {
      color: #fff;
      background: #d9291c;
    }
  }
`;

export const Styled = {
  MainTitle,
  ImagesContainer,
  ItemsContainer,
  ItemContainer,
  ItemAvatar,
  DotItems,
  DotItem,
  ProductDescriptionItems,
  ProductDescriptionItem,
  ProductPriceContainer,
  ProductPrice,
  AddToCardButton,
};
