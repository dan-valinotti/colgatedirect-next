import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 100%;
  grid-column-gap: 1rem;
  margin: 0 2rem;
  min-width: 66%;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
`;

export const Styled = {
  Container,
  LinkContainer,
};
