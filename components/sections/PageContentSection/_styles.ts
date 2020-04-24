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
  margin: auto ${(props) => (props.alignWithEdge ? '0' : '1rem')};
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
  display: grid;
  grid-template-rows: 25% 50% 25%;
  grid-template-columns: 100%;
  grid-row-gap: 1rem;
  flex-basis: 50%;
  margin: 0 1rem;
`;

const SectionTitle = styled.h3`
  color: ${(props) => theme.palette[props.fontcolor].main};
  font-size: 2.25rem;
  font-weight: 700;
  font-family: "Colgate Ready", serif;
  text-align: left;
  margin-bottom: 0;
`;

const SectionSubtitle = styled.p`
  color: #535353;
  font-size: 1.25rem;
  font-family: "Colgate Ready", serif;
`;

export const Styled = {
  Container,
  ContentContainer,
  ImageContainer,
  TextContainer,
  SectionTitle,
  SectionSubtitle,
};
