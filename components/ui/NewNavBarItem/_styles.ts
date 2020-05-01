import styled, { css } from 'styled-components';
import { theme } from '../../../views/theme';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;

  * {
    font-family: "Colgate Ready", serif;
    color: rgba(0,0,0,0.7);
  }
`;

const RootNavButton = styled.button`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  margin: auto 0;
  padding: 0;
  text-align: center;
  position: relative;
  z-index: 2;
  background-color: #fafafa;

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
  height: 3rem;
  background-color: #ffffff;
  border: none;
  text-align: center;
  
  * {
    transition: color 0.25s ease-in-out;
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
