import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';

type Props = {
  /**
   * Color of button text and border.
   */
  color: string;
  /**
   * Text contained in button.
   */
  text: string;
  /**
   * Function to be executed on button click.
   */
  onClick: Function;
  /**
   * CSS id assigned to `<button>` tag.
   */
  id: string;
};

/**
 * Button used globally in site design.
 * @visibleName CTAButton
 */
const CTAButton: FunctionComponent<Props> = ({
  id, color, text, onClick = () => '',
}: Props) => (
  <Styled.Container>
    <Styled.Button id={id} color={color} onClick={onClick}>
      <Styled.ButtonText>
        {text}
      </Styled.ButtonText>
    </Styled.Button>
  </Styled.Container>
);

export default CTAButton;
