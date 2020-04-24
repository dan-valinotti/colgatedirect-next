import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';

type Props = {
  color: string;
  text: string;
  onClick: Function;
};

const CTAButton: FunctionComponent<Props> = ({ color, text, onClick }: Props) => (
  <Styled.Container>
    <Styled.Button color={color} onClick={() => onClick()}>
      <Styled.ButtonText>
        {text}
      </Styled.ButtonText>
    </Styled.Button>
  </Styled.Container>
);

export default CTAButton;
