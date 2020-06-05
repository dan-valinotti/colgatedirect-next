import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    position: fixed;
    z-index: 100;
    justify-content: flex-end;
  bottom: 0.7rem;
`;

const Button = styled.div`
    color: blue;
    justify-content: flex-end;
    padding-right: 1.2rem;
  font-size: 2.0rem;
`;

export const Styled = {
  Container,
  Button,
};
