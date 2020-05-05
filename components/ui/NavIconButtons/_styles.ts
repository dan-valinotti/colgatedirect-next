import styled from 'styled-components';
import { theme } from '../../../views/theme';

const Container = styled.div`
  display: flex;
  width: min-content;
  height: 100%;
  margin-left: 1rem;
  
  @media screen and (min-width: 375px) {
    margin-left: 0;
  }

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
    position: relative;
    z-index: 3;

    :nth-child(2) {
      padding-left: 1rem;
    }

    &:hover {
      cursor: pointer;
      color: ${theme.palette.primary.main};
    }
  }
`;

export const Styled = {
  Container,
  IconContainer,
};
