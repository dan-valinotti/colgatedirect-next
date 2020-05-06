import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import CTAButton from '../../ui/CTAButton';

type Props = {
  /** CSS ID assigned to component root element. */
  id: string;
  /** Define if text is aligned to left or right of banner. */
  alignContent: 'left' | 'right';
  /** Flag that determines if image is aligned to edge of screen. */
  alignWithEdge?: boolean;
  /** Background color of entire banner. */
  backgroundColor: string;
  /** Flag that determines if a CTAButton is rendered in the banner. */
  ctaButton?: boolean;
  /** Text passed to CTAButton component. */
  ctaButtonText?: string;
  /** onClick function passed to CTAButton component. */
  ctaOnClick?: Function;
  /** Medium-size text displayed above title. */
  headline?: string;
  /** URL of image displayed in banner. */
  image: any;
  /** Subtitle text. */
  subtitle?: string;
  /** Color of title/subtitle/CTAButton. Overridden when using headline. */
  sectionColor: string;
  /** Title text. Use "primary", "secondary", or custom color value. */
  title: string;
  /** Color of title text. */
  titleColor?: string;
};

/**
 * Banner section used primarily on home page. Has multiple options to configure the layout,
 * like having a title and no subtitle, including a CTAButton, etc.
 */
const PageContentSection: FunctionComponent<Props> = ({
  id,
  alignContent,
  alignWithEdge = false,
  backgroundColor,
  ctaButton = false,
  ctaButtonText = '',
  ctaOnClick = () => null,
  headline = undefined,
  image,
  subtitle = undefined,
  sectionColor,
  title,
  titleColor = 'primary',
}: Props) => (
  <Styled.Container id={id} backgroundColor={backgroundColor}>
    <Styled.ContentContainer aligncontent={alignContent}>
      <Styled.ImageContainer alignWithEdge={alignWithEdge}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={image} alt="Section Image" />
      </Styled.ImageContainer>
      <Styled.TextContainer align={alignContent}>
        {headline && (
          <Styled.SectionHeadline fontcolor={sectionColor}>
            {headline}
          </Styled.SectionHeadline>
        )}
        <Styled.SectionTitle
          fontcolor={
            (!headline ? (titleColor || sectionColor) : '#535353')
          }
        >
          {title}
        </Styled.SectionTitle>
        {subtitle && (
          <Styled.SectionSubtitle>
            {subtitle}
          </Styled.SectionSubtitle>
        )}
        {ctaButton && (
          <Styled.ButtonContainer align={alignContent}>
            <CTAButton id={`${id}-cta`} color={sectionColor} text={ctaButtonText} onClick={ctaOnClick} />
          </Styled.ButtonContainer>
        )}
      </Styled.TextContainer>
    </Styled.ContentContainer>
  </Styled.Container>
);

export default PageContentSection;
