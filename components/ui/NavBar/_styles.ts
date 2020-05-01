import styled from 'styled-components';
import {
  Drawer,
} from '@material-ui/core';

const CustomDrawer = styled(Drawer)`
  width: 300px;

  &--header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h6 {
      padding-left: 15px;
    }
  }
`;

const IconButtonsContainer = styled.div`
  margin-left: auto;
  display: flex;
`;

export const Styled = {
  CustomDrawer,
  IconButtonsContainer,
};
