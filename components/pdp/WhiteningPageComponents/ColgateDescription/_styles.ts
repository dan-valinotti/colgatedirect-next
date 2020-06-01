import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

const ColgateBody = styled.div`
  margin: 40px 0 40px 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  text-align: center;
  display: block;
`;
const ColgateTitle = styled.h1`
  font-size: 2.2em;
  font-weight: 700;
  margin: 0 0 0.5em;
`;
const DescriptionWrap = styled.div`
  display: flow-root;
`;
const SubtitleDiv = styled.div`
  display: block;
`;
const RateDiv = styled.div`
  padding-right: 20px;
  margin-top: 5px;
  display: flex;
`;
const PrReviewSnippet = styled.div`
  display: block;
  text-align: left;
`;
const WrapperAfterPay = styled.div`
  display: flex;
`;
const WrapperAfterPayImg = styled.img`
  vertical-align: middle;
  max-width: 100px;
  margin-left: 20px;
  height: 20px;
`;
const DesGrid = styled(Grid)`
  display: flex;
`;
const WrapperDescription = styled.div`
  margin-top: 5px;
`;
const Ingredients = styled.h2`
  text-align: left;
  font-size: 0.72em;
  line-height: 120%;
  margin-bottom: 0;
  letter-spacing: 0;
  font-weight: 400;
`;
export const Styled = {
  ColgateBody,
  ColgateTitle,
  DescriptionWrap,
  Ingredients,
  SubtitleDiv,
  RateDiv,
  PrReviewSnippet,
  WrapperAfterPay,
  WrapperAfterPayImg,
  WrapperDescription,
  DesGrid,
};
