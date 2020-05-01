import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import NavItems from './navItems.json';
import NewNavBarItem from '../NewNavBarItem';
import NavIconButtons from '../NavIconButtons/index';

type Props = {
  test?: string;
};

const NewNavBar: FunctionComponent<Props> = ({ test }: Props) => (
  <Styled.Container>
    <Styled.FlexContainer style={{ maxWidth: 1100, margin: '0 auto' }}>
      <Styled.LogoWrapper>
        <Styled.Logo>
          <Link href="/">
            <img src="/static/images/nav-logo.png" alt="ShopSmiles by Colgate" />
          </Link>
        </Styled.Logo>
      </Styled.LogoWrapper>
      <Styled.FlexContainer>
        {NavItems.navigationItems.map(({ title, handle, products }, key) => (
          <NewNavBarItem
            title={title}
            handle={handle}
            products={products}
            key={key}
          />
        ))}
      </Styled.FlexContainer>
      <Styled.FlexContainer>
        <NavIconButtons />
      </Styled.FlexContainer>
    </Styled.FlexContainer>
  </Styled.Container>
);

export default NewNavBar;
