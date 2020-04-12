import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

const Title = styled(Typography)`
&&& {
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
}
`;

const StyledGrid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`;

export const Styled = {
  Container,
  StyledGrid,
  Title,
};
