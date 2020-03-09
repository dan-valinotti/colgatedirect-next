import React, { useState } from 'react';
import {
  Collapse, List, ListItem, ListItemText,
} from '@material-ui/core';
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

  return (
    <>
      <ListItem button onClick={toggleOpen} className="nav-list-item">
        <ListItemText primary={title} />
      </ListItem>
      {products.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Styled.NavList component="div" classes={{ root: 'nav-list-item--inner' }} disablePadding>
            {products.map((product, index) => (
              <ListItem button key={index}>
                <ListItemText primary={product.title} />
              </ListItem>
            ))}
          </Styled.NavList>
        </Collapse>
      )}
    </>
  );
};

export default NavBarItem;
