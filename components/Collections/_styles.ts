import styled, { css } from 'styled-components';
import { theme } from '../../views/theme';

const SubItem = styled.button`
  width: 100%;
  height: 2rem;
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


export const SortStyled = {
  SubItem,
};
