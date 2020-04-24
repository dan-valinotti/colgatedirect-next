import styled, { injectGlobal } from 'styled-components';
import { theme } from '../../views/theme';

const Container = styled.div`
  display: flex;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => theme.palette[props.color].main};
  border: 2px solid ${(props) => theme.palette[props.color].main};
  border-radius: 0.5rem;
  min-width: 270px;
  height: min-content;
  transition: 
   color 0.25s ease,
   border-color 0.25s ease,
   background-color 0.25s ease;
  
  &:hover {
    cursor: pointer;
    color: #efefef;
    background-color: ${(props) => theme.palette[props.color].main};
    border-color: ${(props) => theme.palette[props.color].main};
  }
`;

const ButtonText = styled.p`
  font-family: "Colgate Ready", serif;
  padding: 0.75rem 0;
  margin: 0 auto;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Styled = {
  Container,
  Button,
  ButtonText,
};
