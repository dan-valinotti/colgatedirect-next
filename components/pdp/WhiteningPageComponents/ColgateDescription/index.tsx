import React, { FunctionComponent } from 'react';
import { Grid } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import { Styled } from './_styles';
import { ProductDetailsProps } from './_types';
import DynamicTabs from '../../../DynamicTabs';
import AddToCart from '../../../sections/AddToCart';


const ColgateDescription: FunctionComponent<ProductDetailsProps> = (
  { details }: ProductDetailsProps,
) => {
  const DynamicTabsItems = [
    {
      title: 'Description',
      content: details.description,
    },
    {
      title: 'Ingredients',
      content: details.ingredients,
    },
  ];
  return (
    <Styled.ColgateBody>
      <Styled.ColgateTitle>{details.title}</Styled.ColgateTitle>
      <Styled.DescriptionWrap>
        <Styled.SubtitleDiv>
          <Styled.Ingredients>{details.subTitle}</Styled.Ingredients>
          <Styled.RateDiv>
            <Styled.PrReviewSnippet>
              <StarRatings editable={false} name="rating" rating={4.25} starRatedColor="#d9291c" starDimension="20px" starSpacing="3px" />
              <br />
              <a href="#">Write a Review</a>
            </Styled.PrReviewSnippet>
            <Styled.WrapperAfterPay>
              <Styled.WrapperAfterPayImg src={details.afterPayImgURL} />
              <a href="https://www.afterpay.com/purchase-payment-agreement">ⓘ</a>
            </Styled.WrapperAfterPay>
          </Styled.RateDiv>
          <Styled.WrapperDescription>
            <Grid container spacing={1}>
              <Styled.DesGrid item container xs={12} md={12} spacing={1}>
                <Grid item xs={12} md={6} spacing={1}>
                  <DynamicTabs items={DynamicTabsItems} />
                </Grid>
                <Grid item xs={12} md={6} spacing={1}>
                  <AddToCart details={details} />
                </Grid>
              </Styled.DesGrid>
            </Grid>
          </Styled.WrapperDescription>
        </Styled.SubtitleDiv>
      </Styled.DescriptionWrap>
    </Styled.ColgateBody>
  );
};

export default ColgateDescription;
