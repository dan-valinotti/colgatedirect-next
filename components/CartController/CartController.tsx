/* global localStorage */
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  IconButton, Popover, Typography,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  CREATE_CART, CreateCartResponse, GetCartRequest, GET_CART_QUERY, CreateCartRequest,
} from './_types';
import './_style.scss';
import CartContent from '../CartContent/CartContent';

const CartController = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Check if cart token exists in LocalStorage
  const [cartToken, setCartToken] = useState<string>(null);

  // Create new cart if token does not exist
  const createVars: CreateCartRequest = {
    input: {},
  };
  const [createCart, {
    data: createCartData,
    loading: createCartLoading,
    error: createCartError,
  }] = useMutation<CreateCartResponse>(CREATE_CART, {
    variables: createVars,
  });

  // Get cart data
  const variables: GetCartRequest = {
    checkoutId: cartToken,
  };
  const {
    data: getCartData,
    loading: getCartLoading,
    error: getCartError,
  } = useQuery(GET_CART_QUERY, {
    skip: !cartToken,
    variables,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleOpen = (event) => {
    handleClick(event);
    setOpen(true);
  };


  useEffect(() => {
    if (window.localStorage && !getCartData) {
      setCartToken(window.localStorage.getItem('shopifyCartToken'));

      if (!window.localStorage.getItem('shopifyCartToken')) {
        createCart().then((res) => {
          // console.log(res);
        });
      }
    }

    // To be executed after new cart is created
    const onCompleted = (res) => {
      if (res) {
        // console.log(res);
        setCartToken(res.checkoutCreate.checkout.id);
        localStorage.setItem('shopifyCartToken', cartToken);
      }
    };

    // To be executed after create cart error
    const onError = (error) => <div>{error}</div>;

    if (onCompleted || onError) {
      if (onCompleted && !createCartLoading && !createCartError) {
        onCompleted(createCartData);
      } else if (onError && !createCartLoading && createCartError) {
        onError(createCartError);
      }
    }
  }, [cartToken, createCart, createCartData, createCartError, createCartLoading, getCartData]);

  return (
    <div id="cart-btn">
      {(createCartLoading || getCartLoading) && (
        <Typography variant="body2">Loading cart...</Typography>
      )}
      {(createCartError || getCartError) && (
        <Typography variant="body2">Error!</Typography>
      )}
      {(
        !getCartLoading && !createCartLoading
        && !getCartError && !createCartError
        && getCartData)
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
            <CartContent cart={getCartData} />
          </Popover>
        </>
      )}
    </div>
  );
};

export default CartController;
