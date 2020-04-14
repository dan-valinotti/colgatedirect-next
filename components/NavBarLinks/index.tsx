import React, { FunctionComponent, useState } from 'react';
import { ProductItem } from 'components/NavBarItem';
import { Styled } from './_styles';
import { TestInterface } from './_types';
import NavItems from '../NavBar/navItems.json';

type Props = {
  test?: string;
};

type ItemProps = {
  title: string;
  products: ProductItem[];
};

const NavBarLinkItem: FunctionComponent<ItemProps> = ({ title, products }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Styled.LinkContainer>
      <p>{title}</p>
    </Styled.LinkContainer>
  );
};

const NavBarLinks: FunctionComponent<Props> = ({ test }: Props) => (
  <Styled.Container>
    {NavItems.navigationItems.map(({ title, products }, key) => (
      <NavBarLinkItem title={title} products={products} key={key} />
    ))}
  </Styled.Container>
);

export default NavBarLinks;
