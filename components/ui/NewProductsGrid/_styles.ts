import styled from 'styled-components';
import { theme } from '~views/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-flow: dense;
  border-top: 1px solid ${theme.palette.grey[300]};
  border-left: 1px solid ${theme.palette.grey[300]};
  max-width: 100%;
  margin: 0 2em;
`;

export const Styled = {
  Container,
  Grid,
};
