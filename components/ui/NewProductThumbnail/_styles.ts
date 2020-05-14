import styled from 'styled-components';
import { theme } from '~views/theme';

const Container = styled.div`
  height: auto;
  width: 100%;
  flex-basis: 25%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70% 30%;
  border-bottom: 1px solid ${theme.palette.grey[300]};
  border-right: 1px solid ${theme.palette.grey[300]};
  padding: 1.5em;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  padding: 1em 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  p:nth-child(1) {
    padding-bottom: 1em;
  }

  p {
    flex-basis: 50%;
  }
`;

export const Styled = {
  Container,
  ImageContainer,
  TextContainer,
};
