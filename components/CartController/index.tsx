import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import {
  CircularProgress,
  IconButton, Popover, Typography,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  CREATE_CART,
  CreateCartResponse,
  GetCartRequest,
  GET_CART_QUERY,
  CreateCartRequest,
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION,
} from './_types';
import './_style.scss';
import withData from '../../lib/apollo';
import CartContent from '../CartContent';

// Container component for the Cart that handles checking if a cart exists,
// as well as retrieving the cart info and items.
const CartController = () => {
  // State variable declaration
  const [cartToken, setCartToken] = useState<string>(null); // Check for cart token
  const [open, setOpen] = useState<boolean>(false); // Open/close state of popup
  const [anchorEl, setAnchorEl] = React.useState(null); // Anchor element
  const [total, setTotal] = useState<number>(0); // Total cart price
  const [totalLoading, setTotalLoading] = useState<boolean>(true);
  const [lineItems, setLineItems] = useState<object[]>([]);
  const client = useApolloClient();


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
    refetch: getCartRefetch,
  } = useQuery(GET_CART_QUERY, {
    skip: !cartToken,
    variables,
  });

  // Mutation replaces items in cart
  const [replaceItems, {
    data: replaceItemsData,
    loading: replaceItemsLoading,
    error: replaceItemsError,
  }] = useMutation(CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, {
    variables: {
      checkoutId: cartToken,
      lineItems,
    },
  });

  // Loops through lineItems to get total price of cart
  const getTotal = (items) => {
    let t = 0;
    setTotalLoading(true);
    if (items && items.length > 0) {
      items.forEach((item) => {
        if (item.node.variant.priceV2.amount) {
          t += parseFloat(item.node.variant.priceV2.amount) * parseFloat(item.node.quantity);
        }
      });
      setTotal(t);
      setTotalLoading(false);
    } else {
      setTotal(0);
    }
  };

  // Refresh data when popup is opened
  const handleClick = (event) => {
    getCartRefetch()
      .then(() => {
        if (!getCartLoading && !getCartError && getCartData) {
          // Recalculate total
          getTotal(getCartData.node.lineItems.edges);
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
    if (getCartData) {
      getTotal(getCartData.node.lineItems.edges);
    }
    setOpen(true);
  };

  const clearCart = () => {
    setLineItems([]);
    replaceItems()
      .then((res) => {
        getTotal([]);
      })
      .catch((error) => console.log(error));
  };

  // Function run to progressively check status of GraphQL queries
  // Necessary to run logic for cart status checking and check status
  // of localStorage (can't be accessed until page is rendered on browser)
  // Example: check localStorage -> no cartToken -> createCart
  useEffect(() => {
    // If cart data is retrieved, write that data to the Apollo cache
    if (getCartData) {
      getTotal(getCartData.node.lineItems.edges);
      client.writeData({
        data: {
          lineItems: getCartData.node.lineItems.edges.filter((item) => item.variantId),
        },
      });
    }

    // If localStorage exists and getCart did not give a response yet
    if (window.localStorage && !getCartData) {
      // Set 'shopifyCartToken' item in localStorage
      setCartToken(window.localStorage.getItem('shopifyCartToken'));

      // If value applied was undefined, create new token
      if (!window.localStorage.getItem('shopifyCartToken')) {
        createCart()
          .catch((error) => console.log(error));
      }
    }

    // To be executed after new cart is created
    const onCompleted = (res) => {
      // If response is OK, set localStorage and state cartTokens
      if (res) {
        setCartToken(res.checkoutCreate.checkout.id);
        localStorage.setItem('shopifyCartToken', cartToken);
      }
    };

    // To be executed after create cart error
    const onError = (error) => <div>{error}</div>;

    // Logic for traversing completion/error/loading
    if (onCompleted || onError) {
      if (onCompleted && !createCartLoading && !createCartError) {
        onCompleted(createCartData);
      } else if (onError && !createCartLoading && createCartError) {
        onError(createCartError);
      }
    }
  }, [
    cartToken,
    client,
    createCart,
    createCartData,
    createCartError,
    createCartLoading,
    getCartData,
  ]); // If one of these variables is changed, useEffect() is run again.

  return (
    <div id="cart-btn">
      {(createCartError || getCartError) && (
        <Typography variant="body2">Error!</Typography>
      )}
      {(
        !getCartLoading && !createCartLoading
        && !getCartError && !createCartError
        && getCartData && total !== -1)
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
            <CartContent
              cart={getCartData}
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
