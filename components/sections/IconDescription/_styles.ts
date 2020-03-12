import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 400px;
  width: 90%;
  max-width: 1000px;
  padding: 60px 0;
  margin: 0 auto;
  
  @media (min-width: 1024px) {
    min-height: 400px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-basis: 50%;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  grid-auto-rows: minmax(120px, auto);
  flex-basis: 50%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconTitle = styled(Typography)`
&&& {
  text-align: center;
}
`;
const IconSubtitle = styled(Typography)`
&&& {
  text-align: center;
}
`;

export const Styled = {
  Container,
  VideoContainer,
  IconGrid,
  IconContainer,
  IconTitle,
  IconSubtitle,
};
