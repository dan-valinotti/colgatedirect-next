import styled from 'styled-components';
import { theme } from '../../../views/theme';

const Container = styled.div`
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 100;
    justify-content: flex-end;
  bottom: 0.7rem;
  padding-right: 1.2rem;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    padding-right: 0.7rem;
    padding-bottom: 0.3rem;
  }
`;

const Button = styled.div`
  color: ${theme.palette.primary.main};
  justify-content: flex-end;
  font-size: 2.2rem;
  padding: 0.1rem 0.8rem;
  border: 1.5px  solid;
  background: transparent;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  background-color: #fafafa;
  font-family: 'Colgate Ready', serif;
  border-radius: 0.5rem;
  border-color: ${theme.palette.primary.main};

  &:hover {
    cursor: pointer;
    color: #fafafa;
    background-color: ${theme.palette.primary.main};
  }
  
  transition: 
  color 0.25s ease,
  border-color 0.25s ease,
  background-color 0.25s ease;
 

  @media (max-width: 768px) {
    font-size: 1.0rem;
  }

 
`;

export const Styled = {
  Container,
  Button,
};
