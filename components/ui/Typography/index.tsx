import styled from 'styled-components';
import DynamicComponent from '../../DynamicComponent';
import theme from '../../../styles/theme';

const {
  heading,
  subheading,
  paragraph,
  heroHeading,
  heroSubheading,
  heroBody,
} = theme.textStyles;

const createTypoComponent = (props) => {
  const TypoComponent = styled(DynamicComponent)``;

  TypoComponent.defaultProps = {
    ...props,
  };

  return TypoComponent;
};

export const Heading = createTypoComponent(heading);
export const Subheading = createTypoComponent(subheading);
export const Paragraph = createTypoComponent(paragraph);
export const HeroHeading = createTypoComponent(heroHeading);
export const HeroSubheading = createTypoComponent(heroSubheading);
export const HeroBody = createTypoComponent(heroBody);
