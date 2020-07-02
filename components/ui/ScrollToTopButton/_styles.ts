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



export const Styled = {
  Container,
};
