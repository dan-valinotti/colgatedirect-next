import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';

type Props = {
  mobileOpen: boolean;
};

const NavIconButtons: FunctionComponent<Props> = ({ mobileOpen }: Props) => (
  <Styled.Container>
    <Styled.IconContainer mobileOpen={mobileOpen}>
      <i className="far fa-user-circle" />
      <i className="fas fa-shopping-cart" />
    </Styled.IconContainer>
  </Styled.Container>
);

export default NavIconButtons;
