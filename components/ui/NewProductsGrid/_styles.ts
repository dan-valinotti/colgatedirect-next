import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(6, 200px);
  grid-gap: 0.5rem;
  grid-auto-flow: dense;
`;

export const Styled = {
  Container,
  Grid,
};
