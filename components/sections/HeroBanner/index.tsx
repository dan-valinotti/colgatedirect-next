import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { Styled } from './_styles';
import SectionContainer from '../../SectionContainer';

type Props = {
  title: string;
  subtitle: string;
  bgColor: string;
  bgUrl: string;
  fontColor: string;
  textAlign: string;
  shopNow: boolean;
  productId?: string;
};

const HeroBanner: FunctionComponent<Props> = ({
  title, subtitle, bgColor, bgUrl, fontColor, textAlign, shopNow, productId,
}: Props) => (
  <SectionContainer>
    <Styled.Banner imageUrl={bgUrl} bgColor={bgColor} textalign={textAlign}>
      <Styled.BannerContent textalign={textAlign}>
        <Styled.TextContainer textalign={textAlign}>
          <Styled.BannerTitle variant="h4" fontcolor={fontColor} textalign={textAlign}>
            {title}
          </Styled.BannerTitle>
          <Styled.BannerSubtitle variant="body1" fontcolor={fontColor} textalign={textAlign}>
            {subtitle}
          </Styled.BannerSubtitle>
        </Styled.TextContainer>
      </Styled.BannerContent>
      {shopNow && (
        <Styled.ShopNowButton variant="contained" color="primary">ADD TO CART</Styled.ShopNowButton>
      )}
    </Styled.Banner>
  </SectionContainer>
);

export default HeroBanner;
