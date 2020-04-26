import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { Styled } from './_styles';
import SectionContainer from '../../SectionContainer';

type Props = {
  /** Large text shown on banner. */
  title: string;
  /** Small text shown on banner. */
  subtitle: string;
  /** Color of background not reach by background image. */
  bgColor: string;
  /** Image used as background for banner. */
  bgUrl: string;
  /** Color of font used by title and subtitle. */
  fontColor: string;
  /** Determines if text is aligned to left or right. */
  textAlign?: 'left' | 'right' | 'center';
  /** Flag to set if "Shop Now" button is placed at bottom of banner. */
  shopNow: boolean;
};

const HeroBanner: FunctionComponent<Props> = ({
  title, subtitle, bgColor, bgUrl, fontColor, textAlign = 'center', shopNow,
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
        <Styled.ShopNowButton variant="contained" color="primary">SHOP NOW</Styled.ShopNowButton>
      )}
    </Styled.Banner>
  </SectionContainer>
);

export default HeroBanner;
