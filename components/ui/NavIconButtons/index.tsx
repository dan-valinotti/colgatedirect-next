import React, { FunctionComponent } from 'react';
import CartData from 'components/CartContent/CartData';
import { Styled } from './_styles';
import AccountPopup from '../AccountPopup';

type Props = {
  mobileOpen: boolean;
};

const NavIconButtons: FunctionComponent<Props> = ({ mobileOpen }: Props) => (
  <Styled.Container>
    <Styled.IconContainer mobileOpen={mobileOpen}>
      <AccountPopup />
      <CartData parentComponent="NavIconButtons" />
    </Styled.IconContainer>
  </Styled.Container>
);

export default NavIconButtons;
