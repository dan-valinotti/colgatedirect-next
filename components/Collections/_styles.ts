import styled, { css } from 'styled-components';
import { theme } from '../../views/theme';

const RootNavButton = styled.button`
  border: none;

  background: transparent;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  background-color: #ffffff;
  padding: 0.5rem 2rem;
  font-size: 0.6rem;

  &:hover {
    cursor: pointer;
    * {
        color: ${theme.palette.primary.main};
      }
  }
  
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


export const SortStyled = {
  RootNavButton,
};
