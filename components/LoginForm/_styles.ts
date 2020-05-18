import styled from 'styled-components';

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

const LinkText = styled.p`
&&& {
  font-size: 0.9rem;
  a {
    color: #3b6999;
    text-decoration: none;
  }
}
`;

const SubmitButtonContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding-top: 2rem;
`;

export const Styled = {
  Container,
  FormContainer,
  FormFieldContainer,
  LinkText,
  SubmitButtonContainer,
};
