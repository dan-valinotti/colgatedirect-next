import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import NavItems from '../NewNavBar/navItems.json';

type Props = {
  onClick?: Function;
};

type ItemProps = {
  title: string;
  handle: string;
  products: any[];
  closeWindow: Function;
};

const NavItem: FunctionComponent<ItemProps> = ({
  title,
  handle,
  products,
  closeWindow,
}: ItemProps) => (
  <li
    onClick={() => (products.length === 0 ? closeWindow() : null)}
    role="presentation"
  >
    <Link
      href={handle !== 'null' ? { pathname: '/product', query: { handle } } : '#'}
      as={handle !== 'null' ? `/products/${handle}` : '#'}
      passHref
    >
      <a>
        {title}
      </a>
    </Link>
    {products.length > 0 && (
      <ul>
        {products.map((subItem, key) => (
          <li
            key={key}
            onClick={() => closeWindow()}
            role="presentation"
          >
            <Link
              href={subItem.handle !== 'null'
                ? { pathname: '/product', query: { handle: subItem.handle } }
                : '#'}
              as={subItem.handle !== 'null' ? `/products/${subItem.handle}` : '#'}
              passHref
            >
              <a>
                {subItem.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const MobileNavButton: FunctionComponent<Props> = ({ onClick }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    if (onClick) onClick();
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
                closeWindow={toggleOpen}
              />
            ))}
          </Styled.NavItems>
        </Styled.NavWindow>
      </Styled.NavWindowContainer>
    </Styled.Container>
  );
};

export default MobileNavButton;
