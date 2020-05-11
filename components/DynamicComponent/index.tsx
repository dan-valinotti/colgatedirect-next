import styled from 'styled-components';
import {
  lineHeight,
  fontSize,
  color,
  fontWeight,
  textAlign,
} from 'styled-system';

const StyledDynamicComponent = styled.p`
  ${lineHeight}
  ${fontSize}
  ${color}
  ${fontWeight}
  ${textAlign}
`;

export default StyledDynamicComponent;
