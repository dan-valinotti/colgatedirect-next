import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import AccountPopup from '../AccountPopup';

type Props = {
  mobileOpen: boolean;
};

const NavIconButtons: FunctionComponent<Props> = ({ mobileOpen }: Props) => (
  <Styled.Container>
    <Styled.IconContainer mobileOpen={mobileOpen}>
      <AccountPopup />
      <i className="fas fa-shopping-cart" />
    </Styled.IconContainer>
  </Styled.Container>
);

export default NavIconButtons;
