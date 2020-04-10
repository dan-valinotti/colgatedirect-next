import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PopoverContentContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 300px;
`;

const PopoverTitle = styled(Typography)`
  &&& {
    margin-bottom: 1rem;
  }
`;

const EmailText = styled(Typography)`
  &&& {
    color: rgba(0,0,0,0.6);
    margin-top: 0.5rem;
  }
`;

const AccountInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
  //border-bottom: 1px solid rgba(0,0,0,0.25);
  width: 100%;
`;

const AccountActions = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 100%;
  grid-column-gap: 1.5rem;
  width: 100%;
`;

export const Styled = {
  Container,
  PopoverContentContainer,
  AccountInfo,
  PopoverTitle,
  EmailText,
  AccountActions,
};
