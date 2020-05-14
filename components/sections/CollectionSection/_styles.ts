import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
`;

const GridContainer = styled.div`
  padding-top: 2rem;
  width: 100%;
  height: min-content;
`;

export const Styled = {
  Container,
  GridContainer,
};
