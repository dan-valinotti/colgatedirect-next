import styled from 'styled-components';
import { Typography } from '@material-ui/core';

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
    
  @media (min-width: 768px) {
    align-items: center;
    background-size: cover;
    background-position-x: center;
  }
  
  @media (min-width: 1024px) {
    min-height: 650px;
    background-position-y: 50%;
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
  color: ${(props) => props.fontColor};
  text-align: ${(props) => props.textalign};
  font-weight: 700;
}
`;

const BannerSubtitle = styled(Typography)`
&&& {
  color: ${(props) => props.fontColor};
  text-align: ${(props) => props.textalign};
}
`;

export const Styled = {
  Banner,
  BannerContent,
  TextContainer,
  BannerTitle,
  BannerSubtitle,
};
