// Has main cart data which is passed to CartController for the cart popup
// and CartContentRow for the cart overview page
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import {
  Button,
  CircularProgress,
  IconButton, Popover, Typography,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { gql } from 'apollo-boost';
import {
  CREATE_CART,
  CreateCartResponse,
  GetCartRequest,
  GET_CART_QUERY,
  CreateCartRequest,
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION,
} from '../CartController/_types';
import { getLineItems } from '../ProductDetail/index';
import withData from '../../lib/apollo';
import CartController from '../CartController/index';
import CartContentRow from '../CartContentRow/CartContentRow';
import cart from '../../pages/cart';


// Container component for the Cart that handles checking if a cart exists,
// as well as retrieving the cart info and items.
const CartData = () => {
  // State variable declaration
  const [cartToken, setCartToken] = useState<string>(null); // Check for cart token
  // const [open, setOpen] = useState<boolean>(false); // Open/close state of popup
  // const [anchorEl, setAnchorEl] = React.useState(null); // Anchor element
  const [total, setTotal] = useState<number>(0); // Total cart price
  const [totalLoading, setTotalLoading] = useState<boolean>(true);
  const [lineItems, setLineItems] = useState<object[]>([]);
  const client = useApolloClient();

  const {
    data: cartTokenData,
    loading: cartTokenLoading,
    error: cartTokenError,
  } = useQuery(gql`
      query GetCartToken {
          cartToken @client
      }
  `);

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
    pollInterval: 750,
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
          cartToken: getCartData.node.id, // write cartToken to cache
        },
      });
    }

    // If cartToken was successfully retrieved from cache
    if (cartTokenData && !cartToken) {
      setCartToken(cartTokenData.cartToken);
    }

    // If retrieving cart data from cache failed
    // (most likely becasuse it doesn't exist yet)
    if (cartTokenError) {
      createCart()
        .catch((error) => console.log(error));
    }

    // To be executed after new cart is created
    const onCompleted = (res) => {
      // If response is OK, set localStorage and state cartTokens
      if (res) {
        setCartToken(res.checkoutCreate.checkout.id);
        client.writeData({
          data: {
            cartToken: res.checkoutCreate.checkout.id,
          },
        });
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
    cartTokenData,
    cartTokenError,
    cartTokenLoading,
    client,
    createCart,
    createCartData,
    createCartError,
    createCartLoading,
    getCartData,
  ]); // If one of these variables is changed, useEffect() is run again.
  const cartProps = {
    cart: getCartData,
    clearCart,
    total,
    getTotal,
    createCartLoading,
    getCartLoading,
    createCartError,
    getCartError,
    getCartRefetch,
  };
  return (
    <>
      {console.log(total)}
      <CartController {...cartProps} />
    </>

  );
};

export default withData(CartData);
