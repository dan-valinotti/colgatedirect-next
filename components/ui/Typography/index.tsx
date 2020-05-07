import styled from 'styled-components';
import DynamicComponent from 'components/DynamicComponent';
import theme from '../../../styles/theme';

const {
  heading,
} = theme.textStyles;

const createTypoComponent = (props) => {
  const TypoComponent = styled(DynamicComponent)``;

  TypoComponent.defaultProps = {
    ...props,
  };

  return TypoComponent;
};

export const Heading = createTypoComponent(heading);
// export const TextStyle1 = createTypoComponent(textStyle1);
