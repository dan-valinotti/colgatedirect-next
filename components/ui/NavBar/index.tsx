import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { Styled } from './_styles';
import NavItems from './navItems.json';
import NavBarItem from '../NavBarItem';
import NavIconButtons from '../NavIconButtons/index';
import MobileNavButton from '../MobileNavButton/index';

const NavBar: FunctionComponent = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const toggleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Styled.Container id="navigation-bar">
      <Styled.MainContainer>
        <MobileNavButton onClick={toggleMobileOpen} />
        <Styled.LogoWrapper>
          <Styled.Logo>
            <Link href="/">
              <img id="nav-logo" src="/static/images/nav-logo.png" alt="ShopSmiles by Colgate" />
            </Link>
          </Styled.Logo>
        </Styled.LogoWrapper>
        <Styled.NavItemsContainer id="navigation-items">
          {NavItems.navigationItems.map(({ title, handle, products }, key) => (
            <NavBarItem
              title={title}
              handle={handle}
              products={products}
              key={key}
            />
          ))}
        </Styled.NavItemsContainer>
        <Styled.FlexContainer>
          <NavIconButtons mobileOpen={mobileOpen} />
        </Styled.FlexContainer>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

export default NavBar;
