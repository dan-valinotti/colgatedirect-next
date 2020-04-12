import React, { FunctionComponent, useState, useEffect } from 'react';
import { Styled } from './_styles';
import { ProductDetailsProps } from './_types';
import { Grid, Typography, Fade } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import DynamicTabs from '../../DynamicTabs';
import AddToCart from '../../sections/AddToCart';


const ColgateDescription: FunctionComponent<ProductDetailsProps> = (props: ProductDetailsProps) => {
  
  const DynamicTabsItems = [
    {
      title: 'Description',
      content: props.details.description
    },
    {
      title: 'Ingredients',
      content: props.details.ingredients
    }
  ];
  return(
    <Styled.ColgateBody>
      <Styled.ColgateTitle>{props.details.title}</Styled.ColgateTitle>
      <Styled.DescriptionWrap>
        <Styled.SubtitleDiv>
          <Styled.Ingredients>{props.details.subTitle}</Styled.Ingredients>
          <Styled.RateDiv>
            <Styled.PrReviewSnippet>
            <StarRatings editable={false} name='rating' rating={4.25} starRatedColor="#d9291c" starDimension='20px' starSpacing='3px'/>
            <br/>
            <a href="#">Write a Review</a>
            </Styled.PrReviewSnippet>
            <Styled.WrapperAfterPay>
              <Styled.WrapperAfterPayImg src={props.details.afterPayImgURL}/>
              <a href="https://www.afterpay.com/purchase-payment-agreement">ⓘ</a>
            </Styled.WrapperAfterPay>
          </Styled.RateDiv>
          <Styled.WrapperDescription>
            <Grid container>
              <Styled.DesGrid item xs={12} spacing={1}>
                <Grid item xs={6}>
                  <DynamicTabs items={DynamicTabsItems} />
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={6}>
                  <AddToCart details={props.details} />
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
