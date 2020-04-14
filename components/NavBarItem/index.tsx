import React, { useState } from 'react';
import {
  Collapse, List, ListItem, ListItemText,
} from '@material-ui/core';
import Link from 'next/link';
import { Styled } from './_styles';

interface Props {
  title: string;
  products: ProductItem[];
}

export type ProductItem = {
  title: string;
  handle: string;
};

const NavBarItem = ({ title, products }: Props) => {
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
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={() => console.log('FOCUS')}
    >
      <ListItem
        button
        onClick={toggleOpen}
        className="nav-list-item"
      >
        <ListItemText primary={title} />
      </ListItem>
      {products.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Styled.NavList component="div" classes={{ root: 'nav-list-item--inner' }} disablePadding>
            {products.map((product, index) => (
              <Link href={`${product.handle}`} key={index}>
                <ListItem button>
                  <ListItemText primary={product.title} />
                </ListItem>
              </Link>
            ))}
          </Styled.NavList>
        </Collapse>
      )}
    </div>
  );
};

export default NavBarItem;
