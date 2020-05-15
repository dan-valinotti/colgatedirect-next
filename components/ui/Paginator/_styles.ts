import styled from 'styled-components';
import { theme } from '~views/theme';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(80px, 1fr));
  width: min-content;
  margin: 1em auto;
  height: 6em;
`;

const PageNumberLabel = styled.p`
  font-size: 1.25em;
  padding: 0 1em;
  text-align: center;
  margin: auto;
`;

const NextPrevButton = styled.button`
  width: 55px;
  height: 55px;
  margin: auto;
  position: relative;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  border: 2px solid ${theme.palette.primary.main};
  background-color: transparent;
  border-radius: 50%;
  z-index: 0;

  i {
    color: ${theme.palette.primary.main};
    font-size: 2em;
    text-align: center;
    position: relative;
    z-index: 1;
  }

  &:hover {
    cursor: pointer;
    background-color: ${theme.palette.primary.main};

    i {
      color: #fafafa;
    }
  }
`;

const ButtonPlaceholder = styled.div`
  width: 3em;
  height: 100%;
`;

export const Styled = {
  Container,
  PageNumberLabel,
  NextPrevButton,
  ButtonPlaceholder,
};
