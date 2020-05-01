import React, { FunctionComponent } from 'react';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import NavItems from './navItems.json';
import NewNavBarItem from '../NewNavBarItem';

type Props = {
  test?: string;
};

const NewNavBar: FunctionComponent<Props> = ({ test }: Props) => (
  <Styled.Container>
    <Styled.FlexContainer>
      <Styled.LogoWrapper>
        <h3>ShopSmiles by Colgate</h3>
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

export default NewNavBar;
