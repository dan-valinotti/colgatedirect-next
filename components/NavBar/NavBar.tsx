import React, { FunctionComponent } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem, ListItemIcon, ListItemText, Collapse,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import { useQuery } from '@apollo/react-hooks';
import {
  COLLECTIONS_QUERY, Collections,
} from './_types';
import './_style.scss';
import CartController from '../CartController/CartController';
import NavItems from './navItems.json';
import NavBarItem, { ProductItem } from '../NavBarItem/NavBarItem';

type Props = {
  /** Navigation items to be displayed in NavBar */
  items: string[];
};

interface NavItems {
  title: string;
  handle: string;
  products: ProductItem[];
}

/**
 * General component description.
 */
const NavBar: FunctionComponent<Props> = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { data, loading, error } = useQuery<Collections, object>(
    COLLECTIONS_QUERY,
    { variables: {} },
  );

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className="navbar-button"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Colgate Connect
          </Typography>
          <CartController />
        </Toolbar>
      </AppBar>
      <Drawer
        className="navbar-drawer"
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: 'navbar-drawer',
        }}
      >
        <div className="navbar-drawer--header">
          <Typography variant="h6">Site Navigation</Typography>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        { !loading && !error && data && (
        <List>
          {NavItems.navigationItems.map(({ title, products }, key) => (
            <NavBarItem title={title} products={products} />
          ))}
        </List>
        )}
      </Drawer>
    </>
  );
};

export default NavBar;
