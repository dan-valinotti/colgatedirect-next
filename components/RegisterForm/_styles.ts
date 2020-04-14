import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 600px;
`;

const FormContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 320px;
  padding-top: 2rem;
  
  div {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const SubmitButton = styled(Button)`
  &&& {
    margin-top: 1.25rem;
  }
  width: 10rem;
`;

export const Styled = {
  Container,
  FormContainer,
  FormFieldContainer,
  SubmitButton,
};
