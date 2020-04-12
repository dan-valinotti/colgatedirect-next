import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core';

const DetailsMainContainer = styled(Grid)`
  &&& {
    height: 100vh;
  }
`;

const DetailsContainer = styled.div`
  padding: 20px;
  color: #535353;
  background: #fff;
  padding-bottom: 0;
`;

const DetailsTitle = styled.h1`
  font-size: 2em;
  font-weight: 700;
`;

const DetailsSubTitle = styled.div`
  margin-top: 5px;
`;

const PriceContainer = styled.div`
  font-weight: 700;
  font-size: 1.75em;
  text-align: center;
`;

const PriceSubTitle = styled.div`
  color: #376B9E;
  margin-top: 5px;
  font-weight: 700;
  font-size: 1.25em;
  text-align: center;
`;

const SubDetailesContainer = styled.div`
  padding: 0 20px;
`;

const SubDetailesTitle = styled.div`
  color: #535353;
  flex-basis: 100%;
  margin-top: 30px;
  font-size: 1.3em;
  font-weight: 500;
  text-align: center;
`;

const SubDetailsItem = styled(Grid)`
  &&& {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const SubDetailsItemAvatar = styled.img`
  max-width: 115px;
  margin-bottom: 5px;
`;

const SubDetailsItemText = styled.div`
  margin: auto;
  color: #535353;
  max-width: 22em;
  font-size: 0.9em;
  margin-top: 0.7em;
  line-height: 150%;
  margin-bottom: 15px;
`;

const AddToCardButton = styled(Button)`
  &&& {
    padding: 10px;
    color: #d9291c;
    font-size: 1.3em;
    border-width: 2px;
    border-radius: 8px;
    border-color: #d9291c;
    text-transform: uppercase;
    &:hover {
      color: #fff;
      background: #d9291c;
    }
  }
`;

const LabelGridItem = styled(Grid)`
  &&& {
    padding: 10px;
    text-align: center;
  }
`;

const LabelAvatar = styled.img`
  max-height: 65px;
  margin-bottom: 10px;
`;

const LabelText = styled.div`
  font-size: 1.1em;
  font-weight: 700;
  color: #535353;
`;

const AvatarsContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 1200px;
  position: relative;
`;

const AvatarItem = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transition: all .5s ease-out;
`;

export const Styled = {
  DetailsMainContainer,
  DetailsContainer,
  DetailsTitle,
  DetailsSubTitle,
  PriceContainer,
  PriceSubTitle,
  SubDetailesContainer,
  SubDetailesTitle,
  SubDetailsItem,
  SubDetailsItemAvatar,
  SubDetailsItemText,
  AddToCardButton,
  LabelGridItem,
  LabelAvatar,
  LabelText,
  AvatarsContainer,
  AvatarItem,
};