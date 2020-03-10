import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';

type Props = {
  title: string;
  subtitle: string;
  bgColor: string;
  bgUrl: string;
  fontColor: string;
};

const HeroBanner: FunctionComponent<Props> = ({
  title, subtitle, bgColor, bgUrl, fontColor,
}: Props) => (
  <Styled.Banner imageUrl={bgUrl} bgColor={bgColor}>
    <Styled.BannerContent>
      <Styled.TextContainer>
        <Styled.BannerTitle variant="h4" fontColor={fontColor}>
          {title}
        </Styled.BannerTitle>
        <Styled.BannerSubtitle variant="body1" fontColor={fontColor}>
          {subtitle}
        </Styled.BannerSubtitle>
      </Styled.TextContainer>
    </Styled.BannerContent>
  </Styled.Banner>
);

export default HeroBanner;
