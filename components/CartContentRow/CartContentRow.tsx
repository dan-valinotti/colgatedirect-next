import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import {
  Button, List, ListItem, Typography, Grid, CircularProgress,
} from '@material-ui/core';
import withData from '../../lib/apollo';
import {
  CREATE_CART,
  CreateCartResponse,
  GetCartResponse,
  GetCartRequest,
  GET_CART_QUERY,
  CreateCartRequest,
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION,
} from '../CartController/_types';
import { Styled } from './_styles';

const CartContentRow = () => {
  const [cartToken, setCartToken] = useState<string>(null); // Check for cart token
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
    pollInterval: 750,
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
      {(createCartLoading || getCartLoading) && (
      <CircularProgress />
      )}
      {(createCartError || getCartError) && (
      <Typography variant="body2">Error!</Typography>
      )}
      ${console.log(getCartLoading)}${console.log(getCartError)}${console.log(getCartData)}{(
        !getCartLoading && !createCartLoading
      && !getCartError && !createCartError
      && getCartData && total !== -1)
    && (
    <Styled.Container>
      <Typography variant="h6">Cart</Typography>
      <List className="cart-popover-list">
        {getCartData.node.lineItems.edges.map((item, key) => (
          <>
            <ListItem button key={key}>
              <Styled.ItemContainer>
                <Typography variant="h6">{item.node.title}</Typography>
                <Typography variant="h6">
                  ${item.node.variant.priceV2.amount * item.node.quantity}
                </Typography>
              </Styled.ItemContainer>
            </ListItem>
            {key === getCartData.node.lineItems.edges.length - 1 && (
            <Styled.CartListItem>
              <Styled.ItemContainer>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6">
                  ${total}
                </Typography>
              </Styled.ItemContainer>
            </Styled.CartListItem>
            )}
          </>
        ))}
      </List>
    </Styled.Container>
    )}
    </div>
  );
};

export default withData(CartContentRow);
