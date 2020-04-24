import styled from 'styled-components';
import { theme } from '../../../views/theme';

const Container = styled.div`
  display: flex;
  margin-bottom: 4rem;
  background-color: ${(props) => props.backgroundColor};
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => (props.aligncontent === 'left' ? 'row' : 'row-reverse')};
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: auto ${(props) => (props.alignWithEdge ? '0' : '2rem')};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 33%;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-basis: 50%;
  margin: 0 1rem;
  text-align: ${(props) => (props.align === 'left' ? 'right' : 'left')};
`;

const SectionTitle = styled.h3`
  color: ${(props) => theme.palette[props.fontcolor].main};
  font-size: 2.25rem;
  font-weight: 700;
  font-family: "Colgate Ready", serif;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  color: #535353;
  font-size: 1.25rem;
  font-family: "Colgate Ready", serif;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.align === 'left' ? 'flex-end' : 'flex-start')};
`;

export const Styled = {
  Container,
  ContentContainer,
  ImageContainer,
  TextContainer,
  SectionTitle,
  SectionSubtitle,
  ButtonContainer,
};
