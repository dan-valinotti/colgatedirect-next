import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';

type Props = {
  color: string;
  text: string;
  onClick: Function;
  id: string;
};

const CTAButton: FunctionComponent<Props> = ({ id, color, text, onClick }: Props) => (
  <Styled.Container>
    <Styled.Button id={id} color={color} onClick={() => onClick()}>
      <Styled.ButtonText>
        {text}
      </Styled.ButtonText>
    </Styled.Button>
  </Styled.Container>
);

export default CTAButton;
