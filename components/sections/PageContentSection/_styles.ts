import styled from 'styled-components';
import { theme } from '../../../views/theme';

const Container = styled.div`
  display: flex;
  margin-bottom: 4rem;
  background-color: ${(props) => props.backgroundColor};
  padding: 3rem 1.5rem;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.aligncontent === 'left' ? 'row' : 'row-reverse')};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: auto ${(props) => (props.alignWithEdge ? '0' : '1rem')};
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 33%;
  
  img {
    width: 100%;
    height: auto;
  }
  
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-basis: 55%;
  padding: 0 5%;
  text-align: ${(props) => (props.align === 'left' ? 'right' : 'left')};
  
  > p {
    flex-basis: 60%;
    padding: 0;
    margin: ${(props) => (props.align === 'left' ? '0 0 1rem auto' : '0 auto 1rem 0')};
  }
`;

const SectionHeadline = styled.p`
  color: ${(props) => theme.palette[props.fontcolor].main};
  font-size: 1.125rem;
  font-family: "Colgate Ready", serif;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SectionTitle = styled.h3`
  color: ${(props) => {
    if (props.fontcolor && (props.fontcolor === 'primary' || props.fontcolor === 'secondary')) {
      return theme.palette[props.fontcolor].main;
    } return props.fontcolor;
  }};
  font-size: 1.55rem;
  font-weight: 700;
  font-family: "Colgate Ready", serif;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  color: #535353;
  font-size: 1.125rem;
  font-family: "Colgate Ready", serif;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.align === 'left' ? 'flex-end' : 'flex-start')};
  padding-top: 0.5rem;
`;

export const Styled = {
  Container,
  ContentContainer,
  ImageContainer,
  TextContainer,
  SectionHeadline,
  SectionTitle,
  SectionSubtitle,
  ButtonContainer,
};
