import React, { useState } from 'react';
import { IconButton, Popover, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { GetCartResponse } from './_types';
import withData from '../../lib/apollo';
import CartContent from '../CartContent/index';

/**
 * properties
 */
interface Props {
  /** Cart data retrieved from Shopfy GraphQL API. */
  cart: GetCartResponse;
  clearCart: Function;
  total: number;
  getTotal: Function;
  createCartLoading: boolean;
  getCartLoading: boolean;
  createCartError: boolean;
  getCartError: boolean;
  getCartRefetch: Function;
  stopPolling: Function;
}

/**
 * Container component for the Cart that handles checking if a cart exists,
 * as well as retrieving the cart info and items.
 * @visibleName CartController
 */
const CartController: React.FC<Props> = ({
  cart, total, getTotal, clearCart, createCartLoading,
  getCartLoading, createCartError,
  getCartError, getCartRefetch,
  stopPolling,
}: Props) => {
  // State variable declaration
  const [open, setOpen] = useState<boolean>(false); // Open/close state of popup
  const [anchorEl, setAnchorEl] = React.useState(null); // Anchor element

  // Refresh data when popup is opened
  const handleClick = (event) => {
    getCartRefetch()
      .then(() => {
        stopPolling();
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
              onClick={(e) => handleOpen(e)}
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

/** @component */
export default withData(CartController);
