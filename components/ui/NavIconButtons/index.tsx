import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';

type Props = {
  test?: string;
};

const NavIconButtons: FunctionComponent<Props> = ({ test }: Props) => (
  <Styled.Container>
    <Styled.IconContainer>
      <i className="far fa-user-circle" />
      <i className="fas fa-shopping-cart" />
    </Styled.IconContainer>
  </Styled.Container>
);

export default NavIconButtons;
