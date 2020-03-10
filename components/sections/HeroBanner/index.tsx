import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';

type Props = {
  title: string;
  subtitle: string;
  bgColor: string;
  bgUrl: string;
  fontColor: string;
  textAlign: string;
};

const HeroBanner: FunctionComponent<Props> = ({
  title, subtitle, bgColor, bgUrl, fontColor, textAlign,
}: Props) => (
  <Styled.Banner imageUrl={bgUrl} bgColor={bgColor}>
    <Styled.BannerContent textalign={textAlign}>
      <Styled.TextContainer textalign={textAlign}>
        <Styled.BannerTitle variant="h4" fontColor={fontColor} textalign={textAlign}>
          {title}
        </Styled.BannerTitle>
        <Styled.BannerSubtitle variant="body1" fontColor={fontColor} textalign={textAlign}>
          {subtitle}
        </Styled.BannerSubtitle>
      </Styled.TextContainer>
    </Styled.BannerContent>
  </Styled.Banner>
);

export default HeroBanner;
