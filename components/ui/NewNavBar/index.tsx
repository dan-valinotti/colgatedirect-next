import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { Styled } from './_styles';
import NavItems from './navItems.json';
import NewNavBarItem from '../NewNavBarItem';
import NavIconButtons from '../NavIconButtons/index';
import MobileNavButton from '../MobileNavButton/index';

const NewNavBar: FunctionComponent = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const toggleMobileOpen = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Styled.Container>
      <Styled.MainContainer>
        <MobileNavButton onClick={toggleMobileOpen} />
        <Styled.LogoWrapper>
          <Styled.Logo>
            <Link href="/">
              <img src="/static/images/nav-logo.png" alt="ShopSmiles by Colgate" />
            </Link>
          </Styled.Logo>
        </Styled.LogoWrapper>
        <Styled.NavItemsContainer>
          {NavItems.navigationItems.map(({ title, handle, products }, key) => (
            <NewNavBarItem
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

export default NewNavBar;
