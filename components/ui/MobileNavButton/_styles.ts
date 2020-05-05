import styled from 'styled-components';
import { theme } from '../../../views/theme';

const Container = styled.div`
  display: flex;
  width: 3rem;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: block;
  font-size: 1.5rem;
`;

const NavWindowContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  z-index: ${(props) => (props.open ? '4' : '-1')};
  background-color: ${(props) => (props.open ? theme.palette.primary.main : 'transparent')};
  transition: all 0.25s ease-in-out;

  opacity: ${(props) => (props.open ? '1' : '0')};
`;

const NavWindow = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  * {
    color: #fafafa;
  }

  i {
    font-size: 2rem;
  }
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  
  @media screen and (min-width: 425px) {
    padding-top: 0;
  }

  * {
    font-family: 'Colgate Ready', serif;
    font-size: 1rem;
    text-transform: uppercase;

    @media (min-width: 376px) {
      font-size: 1.25rem
    }

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  > li {
    font-weight: bold;
    margin-bottom: 1.5rem;

    > ul {
      margin-top: 1rem;
      li {
        margin-bottom: 1.5rem;
        margin-left: 1.5rem;
        a {
          font-weight: normal;
          text-transform: capitalize;
        }
      }
    }
  }
`;

export const Styled = {
  Container,
  IconContainer,
  NavWindowContainer,
  NavWindow,
  NavItems,
};
