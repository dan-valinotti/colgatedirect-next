import styled from 'styled-components';
import { Button, Typography } from '@material-ui/core';

const ColgateBody = styled.div`
  width: 100%;
  margin-top: 60px;
  text-align: center;
  display: block;
  justify-content: center;
  color: #535353;
  letter-spacing: -0.01em;
  vertical-align: baseline;
`;
const DescriptionWrap = styled.div`
  margin-left: 220px;
  display: flow-root;
  text-align: left;
`;
const PwrSnippets = styled.div`
  padding-right: 20px;
  display: flex;
`;
const PrReviewSnippet = styled.div`
  display: block;
`;
const WrapperDescription = styled.div`
  display: flex;
`;
const TitleWrap = styled.div`
`;
const WrapperAfterPay = styled.div`

`;
const AfterPayImg = styled.img`
  vertical-align: middle;
  max-width: 100px;
`;
const Left1 = styled.div`
  padding-left: 15px;
  display: flex;
`;
const Left2 = styled.div`
  flex: 0 0 45%;
  font-size: 100%;
  font: inherit;
  display: block;
  color: #535353;
`;
const Right2 = styled.div`
  flex: inherit;
  display: block;
`;
const h1Styles = {
  fontSize: '2em',
  fontWeight: 700,
  lineHeight: '120%'
}
const h2Styles = {
  fontSize: '0.63em',
  fontWeight: 400,
}
const Description = styled.div`
  width: 90%;
  display: block;
`;
const Tabs = styled.div`
  margin-bottom: 0.5em;
  color: #d6d6d6;
  font-size: 0.95em;
  font-weight: 700;
  font: inherit;
  display: flex;
`;
const Cont = styled.div`
  font-size: 0.81em;
  box-sizing: border-box;
  display: block;
  -webkit-tap-highlight-color: transparent;
`;
const DescriptionNP = styled.a`
  padding-right: 1.2em;
  margin-right: calc(1.2em + 3px);
  position: relative;
  :hover {
		color: #d9291c;
		cursor: pointer;
	}
`;
const DescriptionP = styled.a`
  padding-right: 1.2em;
  margin-right: calc(1.2em + 3px);
  position: relative;
  color: #535353;
  :hover {
    color: #535353;
    cursor: pointer;
  };
`;
const IngredientsP = styled.a`
  padding-left: 1.2em;
  margin-left: calc(1.2em + 3px);
  position: relative;
  text-decoration: none;
  color: #535353;
  :hover {
    color: #535353;
    cursor: pointer;
  };
`;
const IngredientsNP = styled.a`
  padding-left: 1.2em;
  margin-left: calc(1.2em + 3px);
  position: relative;
  text-decoration: none;
  :hover {
    color: #d9291c;
    cursor: pointer;
  };
`;
export const Styled = {
  ColgateBody,
  DescriptionWrap,
  TitleWrap,
  PwrSnippets,
  PrReviewSnippet,
  WrapperDescription,
  WrapperAfterPay,
  AfterPayImg,
  Left1,
  Left2,
  Right2,
  h1Styles,
  h2Styles,
  Description,
  Tabs,
  Cont,
  DescriptionP,
  DescriptionNP,
  IngredientsP,
  IngredientsNP,
};