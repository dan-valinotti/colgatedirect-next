import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import NavItems from './navItems.json';
import NewNavBarItem from '../NewNavBarItem';

type Props = {
  test?: string;
};

const NewNavBar: FunctionComponent<Props> = ({ test }: Props) => {
  const router = useRouter();

  const toIndex = () => {
    router.push('/')
      .catch((error) => console.log(error));
  };

  return (
    <Styled.Container>
      <Styled.FlexContainer>
        <Styled.LogoWrapper>
          <Styled.Logo onClick={toIndex}>
            <img src="/static/images/nav-logo.png" alt="ShopSmiles by Colgate" />
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
      </Styled.FlexContainer>
    </Styled.Container>
  );
};

export default NewNavBar;
