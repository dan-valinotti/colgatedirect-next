import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 450px;
  width: 100%;
  margin-bottom: 15px;
  background-image: url(${(props) => props.imageUrl});
  background-size: 170%;
  background-position-x: 30%;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-color: ${(props) => props.bgColor};
  position: relative;
    
  @media (min-width: 768px) {
    align-items: center;
    background-size: contain;
    background-position-x: ${(props) => (props.textalign === 'left' ? 'right' : 'left')};
  }
  
  @media (min-width: 1024px) {
    min-height: 630px;
  }
`;

const BannerContent = styled.div`
  display: flex;
  justify-content: ${(props) => (props.textalign === 'left' ? 'flex-start' : 'flex-end')};
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  height: 100%;
  
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.textalign === 'left' ? 'flex-start' : 'flex-end')};
  justify-content: flex-start;
  padding-right: 5%;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
    max-width: 50%;
  }
`;

const BannerTitle = styled(Typography)`
&&& {
  color: ${(props) => props.fontcolor};
  text-align: ${(props) => props.textalign};
  font-weight: 900;
  letter-spacing: -0.01em;
  font-size: 1.25em;
}
`;

const BannerSubtitle = styled(Typography)`
&&& {
  color: ${(props) => props.fontcolor};
  text-align: ${(props) => props.textalign};
  font-size: 0.85em;
}
`;

const ShopNowButton = styled(Button)`
&&& {
  position: absolute;
  left: calc(50% - 45px);
  bottom: -40px;
  border-radius: 45px;
  font-weight: 500;
  font-size: 18px;
  width: 250px;
  height: 80px;
  margin-top: 3em;
}
`;

export const Styled = {
  Banner,
  BannerContent,
  TextContainer,
  BannerTitle,
  BannerSubtitle,
  ShopNowButton,
};
