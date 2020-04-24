import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import CTAButton from '../../CTAButton';
import { theme } from '../../../views/theme';

type Props = {
  alignContent: string;
  alignWithEdge: boolean;
  backgroundColor: string;
  ctaButton: boolean;
  ctaButtonText?: string;
  ctaOnClick?: Function;
  headline?: string;
  headlineColor?: string;
  imageUrl: string;
  subtitle?: string;
  title: string;
  titleColor: string;
};

const PageContentSection: FunctionComponent<Props> = ({
  alignContent,
  backgroundColor,
  ctaButton,
  ctaButtonText,
  ctaOnClick,
  headline,
  headlineColor,
  imageUrl,
  subtitle,
  alignWithEdge,
  title,
  titleColor,
}: Props) => (
  <Styled.Container backgroundColor={backgroundColor}>
    <Styled.ContentContainer aligncontent={alignContent}>
      <Styled.ImageContainer alignWithEdge={alignWithEdge}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={imageUrl} alt="Section Image" />
      </Styled.ImageContainer>
      <Styled.TextContainer>
        <Styled.SectionTitle fontcolor={titleColor}>
          {title}
        </Styled.SectionTitle>
        {subtitle && (
          <Styled.SectionSubtitle>
            {subtitle}
          </Styled.SectionSubtitle>
        )}
        {ctaButton && (
          <CTAButton color="primary" text={ctaButtonText} onClick={ctaOnClick} />
        )}
      </Styled.TextContainer>
    </Styled.ContentContainer>
  </Styled.Container>
);

export default PageContentSection;
