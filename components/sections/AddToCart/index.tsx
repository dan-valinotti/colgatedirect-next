import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { MDBCol, MDBIcon } from 'mdbreact';
import { AddToCartProps } from './_types';
import { Styled } from './_styles';

const AddToCart: FunctionComponent<AddToCartProps> = (props: AddToCartProps) => {
  const useSpanStyle = makeStyles({
    root: {
      color: '#d2010d',
    },
  });
  const h6Style = makeStyles({
    root: {
      color: '#535353',
    },
  });
  const classes = useSpanStyle();
  const classes1 = h6Style();
  const className = clsx(classes.root);
  const className1 = clsx(classes1.root);
  const [isRadio, setRadio] = React.useState(true);
  const [monthTitle, setAge] = React.useState(3);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const oneTimeRadioClick = () => {
    setRadio(true);
  };
  const subTimeRadioClick = () => {
    setRadio(false);
  };
  return (
    <Styled.AddToCart>
      <Styled.OnePurchaseTrigger>
        <Styled.OneTimeText>
          <Styled.OneTimeRadio checked={isRadio} onClick={oneTimeRadioClick} />
          <Styled.OneTimePurchaseText>
            <Styled.SpanStyle>One Time Purchase </Styled.SpanStyle> <span>{props.details.oneTimePurchasePrice}</span>
          </Styled.OneTimePurchaseText>
        </Styled.OneTimeText>
      </Styled.OnePurchaseTrigger>
      <Styled.SubscribeTrigger>
        <Styled.SubText>
          <Styled.SubRadio checked={!isRadio} onClick={subTimeRadioClick} />
          <Styled.SubscribeText>
            <Styled.SpanStyle>Subscribe &amp; Save</Styled.SpanStyle>
            <br />
            <Styled.RecommendSpanStyle>Recommended</Styled.RecommendSpanStyle>
          </Styled.SubscribeText>
          <Styled.PaymentSubSpan>{props.details.subPrice}</Styled.PaymentSubSpan>
          <Styled.OnePurchaseSpan>{props.details.oneTimePurchasePrice}</Styled.OnePurchaseSpan>
        </Styled.SubText>
      </Styled.SubscribeTrigger>
      { !isRadio && (
      <Styled.ReviewBox>
        <Styled.ReviewBoxTitle>How Often Should We Ship Refills?
        </Styled.ReviewBoxTitle>
        <Styled.SelectBox
          labelId="demo-simple-select-label"
          value={monthTitle}
          id="demo-simple-select"
          onChange={handleChange}
        >
          {props.details.everyImmonths.map((label, key) => (
            <MenuItem value={label.number}>{label.months}</MenuItem>
          ))}
        </Styled.SelectBox>
        <h3>starting <span>{monthTitle}</span> months from now.</h3>
        <Styled.LineDiv />
        <h5>You will Receive a <span className={className}>10-day</span> Serum supply at a cost of $45.00 every <span className={className}>{monthTitle}</span> months.</h5>
        <h6 className={className1}>Note: You can cancel or skip a shipment at any time.</h6>
      </Styled.ReviewBox>
      )}
      <Styled.AddToCardDiv>
        <Styled.AddToCartButton>
          ADD TO CART
        </Styled.AddToCartButton>
      </Styled.AddToCardDiv>
    </Styled.AddToCart>
  );
};

export default AddToCart;
