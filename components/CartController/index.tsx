import React, { useEffect, useState, FunctionComponent } from 'react';
// import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import {
  CircularProgress,
  IconButton, Popover, Typography,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  GetCartResponse,
} from './_types';
// import './_style.scss';
import withData from '../../lib/apollo';
import CartContent from '../CartContent/index';

/**
 * properties
 */
type Props = {
  cart: GetCartResponse;
  clearCart: Function;
  total: number;
  getTotal: Function;
  createCartLoading: boolean;
  getCartLoading: boolean;
  createCartError: boolean;
  getCartError: boolean;
  getCartRefetch: Function;
};

/**
 * Container component for the Cart that handles checking if a cart exists,
 * as well as retrieving the cart info and items.
 * @visibleName CartController
 */
const CartController: FunctionComponent<Props> = ({
  cart, total, getTotal, clearCart, createCartLoading,
  getCartLoading, createCartError,
  getCartError, getCartRefetch,
}: Props) => {
  // State variable declaration
  const [open, setOpen] = useState<boolean>(false); // Open/close state of popup
  const [anchorEl, setAnchorEl] = React.useState(null); // Anchor element

  // Refresh data when popup is opened
  const handleClick = (event) => {
    getCartRefetch()
      .then(() => {
        if (!getCartLoading && !getCartError && cart) {
          // Recalculate total
          getTotal(cart.node.lineItems.edges);
        }
      })
      .catch((error) => console.log(error));
    // Reset ancho element
    setAnchorEl(event.currentTarget);
  };

  // Handles clicking outside of opened popup
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  // handleClick refreshes data, setOpen opens popup
  const handleOpen = (event) => {
    handleClick(event);
    if (cart) {
      getTotal(cart.node.lineItems.edges);
    }
    setOpen(true);
  };


  return (
    <div id="cart-btn">
      {(createCartError || getCartError) && (
        <Typography variant="body2">Error!</Typography>
      )}
      {(
        !getCartLoading && !createCartLoading
        && !getCartError && !createCartError
        && cart && total !== -1)
        && (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="cart"
              onClick={handleOpen}
            >
              <ShoppingCartIcon />
            </IconButton>
            <Popover
              open={open}
              onClose={handleClose}
              disableScrollLock
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {console.log(cart)}
              <CartContent
                cart={cart}
                total={total}
                clearCart={clearCart}
              />
            </Popover>
          </>
        )}
    </div>
  );
};

export default withData(CartController);
