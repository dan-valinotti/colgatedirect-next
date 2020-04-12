import styled from 'styled-components';
import { Button, Radio, Select} from '@material-ui/core';

const AddToCart = styled.div`
  margin-bottom: -280px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;
const OnePurchaseTrigger = styled.div`
  padding: .5em;
  display: flex !important;
  border: 2px solid#D2D6DF;
  border-radius: 12px;
  :hover {
		border: 2px solid#52ACDB;
		cursor: pointer;
	}
`;
const OneTimeText = styled.div`
  display: flex; !important
  margin-bottom: .5em;
`;
const OneTimePurchaseText = styled.p`
  margin: 1em 2em 1em 0;
  font-family: 'Colgate', sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.01em;
  line-height: 158%;
  font-size: 1em;
`;
const SpanStyle = styled.span`
  line-height: 158%;
  font-size: 1em;
`;
const SubscribeText = styled.p`
  margin: 1em 2em 1em 0;
  font-family: 'Colgate', sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.01em;
  line-height: 158%;
  font-size: 1em;
  display: block; !important
`;
const OneTimeRadio = styled(Radio)`
&&& {
}
`;
const SubRadio = styled(Radio)`
&&& {
}
`;
const SubscribeTrigger = styled.div`
  padding: .5em;
  margin-top: 10px;
  display: flex !important;
  border: 2px solid#D2D6DF;
  border-radius: 12px;
  :hover {
		border: 2px solid#52ACDB;
		cursor: pointer;
	}
`;
const SubText = styled.div`
  margin-bottom: .5em;
  display: flex;
`;
const RecommendSpanStyle = styled.span`
  line-height: 158%;
  font-size: 1em;
  color: #52ACDB;
  font-weight: 700;
`;
const PaymentSubSpan = styled.span`
  padding-right: 20px;
  color: red;
  margin-top: 1em;
`;
const OnePurchaseSpan = styled.span`
  margin-top: 1em;
  text-decoration: line-through;
  font-size: 100%;
`;
const AddToCardDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;
const AddToCartButton = styled(Button)`
&&& {
  cursor: pointer;
  background-color: #3b6999 !important;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50px;
  display: inline-block;
  color: #fff;
  border-radius: 2.5em !important;
  margin: auto;
  text-decoration: none;
  text-align: center;
  font-size: 1.5em;
  font-weight: 700;
  box-shadow: 2px 2px 2px 2px #c6c0c0;
}
`;
const ReviewBox = styled.div`
  width: 100%;
  height: 13em;
  box-shadow: 1px 2px 4px 2px;
  padding-top: 0.3em;
  display: block;
  margin-top: 8px;
  color: ##f3f3f3;
  text-align: left;
  padding: 10px;
`;
const ReviewBoxTitle = styled.div`
  color: #d2010d;
  text-align: left;
  padding-left: 10px;
  font-size: 1.3em;
`;
const SelectBox = styled(Select)`
  width: 100%;
`;
const LineDiv = styled.div`
  width: 90%;
  border-bottom: groove;
  margin: 0 auto 0.5em auto;
`;
export const Styled = {
  AddToCart,
  OnePurchaseTrigger,
  OneTimeText,
  SubText,
  SubscribeTrigger,
  AddToCardDiv,
  OneTimeRadio,
  SubRadio,
  OneTimePurchaseText,
  SubscribeText,
  SpanStyle,
  RecommendSpanStyle,
  PaymentSubSpan,
  OnePurchaseSpan,
  AddToCartButton,
  ReviewBox,
  ReviewBoxTitle,
  SelectBox,
  LineDiv,
};