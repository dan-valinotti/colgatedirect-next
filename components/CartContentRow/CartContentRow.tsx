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

const CartContentRow = ({
  cart, total, getTotal, clearCart, createCartLoading, getCartLoading, createCartError,
  getCartError, getCartRefetch,
}: Props) => {
  const [anchorEl, setAnchorEl] = React.useState(null); // Anchor element
  const [totalLoading, setTotalLoading] = useState<boolean>(true);
  const client = useApolloClient();

  return (
    <div id="cart-btn">
      {(createCartLoading || getCartLoading) && (
      <CircularProgress />
      )}
      {(createCartError || getCartError) && (
      <Typography variant="body2">Error!</Typography>
      )}
      {(
        !getCartLoading && !createCartLoading
      && !getCartError && !createCartError
      && cart && total !== -1)
    && (
    <Styled.Container>
      <Typography variant="h6">Cart</Typography>
      <List className="cart-popover-list">
        {cart.node.lineItems.edges.map((item, key) => (
          <>
            <ListItem button key={key}>
              <Styled.ItemContainer>
                <Typography variant="h6">{item.node.title}</Typography>
                <Typography variant="h6">
                  ${item.node.variant.priceV2.amount * item.node.quantity}
                </Typography>
              </Styled.ItemContainer>
            </ListItem>
            {key === cart.node.lineItems.edges.length - 1 && (
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
