import React, { FunctionComponent } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  useScrollTrigger,
  Slide,
  CssBaseline,
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
import withData from '../../../lib/apollo';
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

interface HideProps {
  children: React.ReactElement;
  window?: () => Window;
}

interface MainProps {
  window?: () => Window;
}

const HideOnScroll = ({ children, window }: HideProps) => {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

/**
 * General component description.
 */
const NavBar: FunctionComponent<MainProps> = ({ window }: MainProps) => {
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
      <CssBaseline />
      <HideOnScroll window={window}>
        <AppBar
          position="fixed"
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

      </HideOnScroll>
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

export default withData(NavBar);
