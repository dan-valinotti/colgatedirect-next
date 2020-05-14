import styled from 'styled-components';
import { theme } from '~views/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 350px);
  grid-auto-flow: dense;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start; */
  border-top: 1px solid ${theme.palette.grey[300]};
  border-left: 1px solid ${theme.palette.grey[300]};
  width: 100%;
  margin: 0 2em;
`;

export const Styled = {
  Container,
  Grid,
};
