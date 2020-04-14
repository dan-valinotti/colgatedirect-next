import styled from 'styled-components';
import { TextField, Typography } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 550px;
  background-color: ${(props) => props.backgroundColor};
  margin-top: 6rem;
  padding: 4rem 0;
`;

const FooterFont = styled(Typography)`
  &&& {
    color: ${(props) => props.fontColor};
    font-weight: 700;
  }
`;

const FooterContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 40% 20%;
  grid-row-gap: 2rem;
`;

const FooterEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FooterEmailField = styled(TextField)`
  &&& {
    padding-top: 1rem;
    
    div input {
      color: ${(props) => props.borderColor} !important;
    }
    div::before {
      border-color: ${(props) => props.borderColor} !important;
    }
  }
`;

const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 33% 33% 34%;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  
  text-align: center;
  padding: 2rem 0;
`;

const FooterSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterSocialIconGrid = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 33% 33% 34%;
  grid-column-gap: 1rem;
`;

const FooterSocialIcon = styled.i`
  font-size: 2rem;
  color: ${(props) => props.color};
`;

const FooterLegalCopy = styled(Typography)`
  &&& {
    color: ${(props) => props.color};
    font-size: 0.7rem;
    text-align: center;
    margin-top: 1rem;
    max-width: 66%;
  }
`;

export const Styled = {
  Container,
  FooterFont,
  FooterContainerGrid,
  FooterEmailContainer,
  FooterEmailField,
  FooterLinksContainer,
  FooterSocialContainer,
  FooterSocialIconGrid,
  FooterSocialIcon,
  FooterLegalCopy,
};
