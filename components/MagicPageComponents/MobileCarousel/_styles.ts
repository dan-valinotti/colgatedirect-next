import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const MagicMobileCarouselContainer = styled.div`
`;

const CarouselItemsContainer = styled.div`
  width: 100%;
  height: 740px;
  position: relative;
  background-repeat: no-repeat;
  background-image: url(https://res.cloudinary.com/di5yipnns/image/upload/v1482236588/apple-iphone_aivldo.png);
  background-size: cover;
  background-position: center center;
`;

const MaskContainer = styled.div`
  left: -10px;
  width: 262px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  padding-top: 130px;
`;

const ItemsContainer = styled.div`
  height: 465px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
`;

const ItemDesciption = styled.div`
  height: 100%;
  display: flex;
  padding: 0 50px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  p {
    width: 100%;
  }
`;

const ItemDesciptionTitle = styled(Typography)`
  &&& {
    width: 100%;
    color: #535353;
    font-size: 1.5em;
    text-transform: uppercase;
  }
`;

const ItemDesciptionSubTitle = styled(Typography)`
  &&& {
    width: 100%;
    color: #000;
    font-size: 1.1em;
    font-weight: 450;
    line-height: 1.6em;
  }
`;

const ItemContainer = styled.div`
  height: 100%;
`;

const ItemAvatar = styled.img`
  width: 100%;
  max-height: 465px;
`;

const DotItems = styled.div`
  left: 0;
  right: 0;
  bottom: 15px;
  padding: 10px 0;
  text-align: center;
  position: absolute;
`;

const DotItem = styled.div`
  left: -10px;
  width: 11px;
  height: 11px;
  margin: 0 2px;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  transition: all 0.4s;
  display: inline-block;
  background: rgba(0, 0, 0, 0.26);
  &.active {
    background: #d9291c;
  }
`;

export const Styled = {
  MagicMobileCarouselContainer,
  CarouselItemsContainer,
  MaskContainer,
  ItemDesciption,
  ItemDesciptionTitle,
  ItemDesciptionSubTitle,
  ItemsContainer,
  ItemContainer,
  ItemAvatar,
  DotItems,
  DotItem,
};
