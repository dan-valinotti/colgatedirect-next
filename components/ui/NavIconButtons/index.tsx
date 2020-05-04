import React, { FunctionComponent, useState } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';

type Props = {
  mobileOpen: boolean;
};

const AccountButton: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <Styled.AccountButtonContainer onClick={toggleOpen}>
      <i className="far fa-user-circle" />
      <Styled.AccountPopupContainer open={open}>
        <Styled.AccountPopup>
          <p>Hello</p>
        </Styled.AccountPopup>
      </Styled.AccountPopupContainer>
    </Styled.AccountButtonContainer>
  );
};

const NavIconButtons: FunctionComponent<Props> = ({ mobileOpen }: Props) => (
  <Styled.Container>
    <Styled.IconContainer mobileOpen={mobileOpen}>
      <AccountButton />
      <i className="fas fa-shopping-cart" />
    </Styled.IconContainer>
  </Styled.Container>
);

export default NavIconButtons;
