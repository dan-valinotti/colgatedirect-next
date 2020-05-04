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
    color: ${(props) => (props.mobileOpen ? '#fafafa' : 'rgba(0,0,0,0.8)')};
    position: relative;
    z-index: 5;
    transition: color 0.25s ease-in-out;

    :nth-child(2) {
      padding-left: 1rem;
    }

    &:hover {
      cursor: pointer;
      color: ${theme.palette.primary.main};
    }
  }
`;

const AccountButtonContainer = styled.div`
  position: relative;
`;

const AccountPopupContainer = styled.div`
  position: absolute;
  right: 0;
  top: 200%;
  transition: all 0.25s ease-in-out;
  z-index: 1;
  transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  width: 400px;
  height: 150px;
  background-color: #fafafa;
`;

const AccountPopup = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Colgate Ready', serif;
`;

export const Styled = {
  Container,
  IconContainer,
  AccountButtonContainer,
  AccountPopupContainer,
  AccountPopup,
};
