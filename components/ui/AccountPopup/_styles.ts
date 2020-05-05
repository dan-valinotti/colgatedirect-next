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
  padding-right: 1rem;

  @media screen and (max-width: 374px) {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    padding-right: 0;
  }
`;

const AccountPopupContainer = styled.div`
  position: fixed;
  right: 0;
  top: 10%;
  transition: all 0.25s ease-in-out;
  z-index: 1;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  width: 450px;
  max-width: 100vw;
  height: 300px;
  background-color: #fafafa;
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.33);

  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 200%;
    transform: ${(props) => (props.open ? 'translateY(0)' : 'translateY(-100%)')};
  }
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

  #login-btn {
    margin-bottom: 1rem;
  }
`;

const AccountDetails = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 40% 40%;
  padding-top: 3rem;
  padding-bottom: 1rem;

  h3 {
    font-weight: bold;
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  * {
    text-align: center;
    font-family: 'Colgate Ready', serif;
  }

  div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      margin-bottom: 1rem;
      :first-child {
      }
    }
  }
  
  @media screen and (min-width: 768px) {
    padding-top: 1rem;
  }
`;

export const Styled = {
  Container,
  IconContainer,
  AccountButtonContainer,
  AccountPopupContainer,
  AccountPopup,
  AccountDetails,
};
