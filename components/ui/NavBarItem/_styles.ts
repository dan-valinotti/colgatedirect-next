import styled, { css } from 'styled-components';
import { theme } from '../../../views/theme';

const Container = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 2;

  * {
    font-family: "Colgate Ready", serif;
    color: rgba(0,0,0,0.7);
    font-weight: 400;
  }
`;

const RootNavButton = styled.button`
  border: none;
  background: transparent;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  background-color: #fafafa;
  padding: 0.5rem 2rem;
  font-size: 0.6rem;

  &:hover {
    cursor: pointer;
  }

  ${(props) => props.hovered && css`
    background-color: #ffffff;
    * {
      color: ${theme.palette.primary.main}
    }
  `};
  
  * {
    transition: 
      color 0.25s ease-in-out,
      background-color 0.25s ease-in-out;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const SubItemContainer = styled.div`
  height: min-content;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  transform: translateY(0%);
  transition: transform 0.25s ease-in-out;

  ${(props) => props.hovered && css`
    &:hover {
      cursor: pointer;
    }
    transform: translateY(100%);
  `};
`;

const SubItem = styled.button`
  width: 100%;
  height: 4rem;
  background-color: #ffffff;
  border: none;
  text-align: center;
  padding: 0 1.5rem;
  
  * {
    transition: color 0.25s ease-in-out;
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  &:hover {
    * {
      color: ${theme.palette.primary.main};
    }
  }
`;

export const Styled = {
  Container,
  RootNavButton,
  SubItemContainer,
  SubItem,
};
