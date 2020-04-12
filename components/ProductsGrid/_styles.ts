import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledGrid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled(Typography)`
&&& {
  text-align: center;
  margin: 0 auto;
  padding-bottom: 2rem;
}
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 15px;
`;

export const Styled = {
  Container,
  StyledGrid,
  Title,
  ProgressContainer,
};
