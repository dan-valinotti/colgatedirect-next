import React, { FunctionComponent } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import styled from 'styled-components';
import {
  COLLECTIONS_QUERY, Collections,
} from './_types';
import './_style.scss';
import CartData from '../../CartContent/CartData';
import NavItems from './navItems.json';
import NavBarItem from '../NavBarItem';
import AccountPopup from '../../AccountPopup';

const HomeLink = styled(Typography)`
&&& {
  &:hover {
    cursor: pointer;
  }
}
`;

/**
 * General component description.
 */
const NavBar: FunctionComponent = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { data, loading, error } = useQuery<Collections, object>(
    COLLECTIONS_QUERY,
    { variables: {} },
  );

  const toggleDrawer = () => {
    setOpen(!open);
  };

  // create component with data
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
          <Link href="/">
            <HomeLink variant="h6">
              Colgate Connect
            </HomeLink>
          </Link>
          <div className="icon-btns-container">
            <AccountPopup />
            <CartData parentComponent="NavBar" />
          </div>
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
            <NavBarItem key={key} title={title} products={products} />
          ))}
        </List>
        )}
      </Drawer>
    </>
  );
};

export default NavBar;
