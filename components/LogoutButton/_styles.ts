import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Container = styled.div`
  display: flex;
`;

const AnimatedButton = styled(Button)`
&&& {
  .processing:first-child {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .processing:nth-child(2) {
    width: 24px !important;
    height: 24px !important;
    opacity: 1;
  }
  span {
    transition: opacity 0.5s ease;
  }
}
`;

export const Styled = {
  Container,
  AnimatedButton,
};
