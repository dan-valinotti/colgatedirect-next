import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import NavItems from '../NewNavBar/navItems.json';

type Props = {
  test?: string;
};

type ItemProps = {
  title: string;
  handle: string;
  products: any[];
};

const NavItem: FunctionComponent<ItemProps> = ({ title, handle, products }: ItemProps) => (
  <li>
    <Link href="/">
      {title}
    </Link>
    {products.length > 0 && (
      <ul>
        {products.map((subItem, key) => (
          <li key={key}>
            <Link href="/">
              {subItem.title}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const MobileNavButton: FunctionComponent<Props> = ({ test }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  console.log(open);
  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Styled.Container>
      <Styled.IconContainer onClick={toggleOpen}>
        <i className="fas fa-bars" />
      </Styled.IconContainer>
      <Styled.NavWindowContainer open={open}>
        <Styled.NavWindow>
          <Styled.IconContainer onClick={toggleOpen}>
            <i className="fas fa-times" />
          </Styled.IconContainer>
          <Styled.NavItems>
            {NavItems.navigationItems.map((item, key) => (
              <NavItem
                title={item.title}
                handle={item.handle}
                products={item.products}
              />
            ))}
          </Styled.NavItems>
        </Styled.NavWindow>
      </Styled.NavWindowContainer>
    </Styled.Container>
  );
};

export default MobileNavButton;
