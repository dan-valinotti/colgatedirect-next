import styled from 'styled-components';
import { theme } from '../../../views/theme';

const Container = styled.div`
  display: flex;
  width: min-content;
  height: 100%;

  @media screen and (min-width: 1024px) {
    width: 8rem;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  i {
    font-size: 1.25rem;
    color: rgba(0,0,0,0.8);
    transition: color 0.25s ease-in-out;

    &:hover {
      cursor: pointer;
      color: ${theme.palette.primary.main};
    }
  }
  
  @media screen and (max-width: 1024px) {
    .fa-user-circle {
      display: none;
    }
  }
`;

export const Styled = {
  Container,
  IconContainer,
};
