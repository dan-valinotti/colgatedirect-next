import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import {
  Button, List, ListItem, Typography, Grid, CircularProgress,
} from '@material-ui/core';
import withData from '../../lib/apollo';
import { GetCartResponse } from '../CartController/_types';
import './_style.scss';
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
  cart, total, createCartLoading, getCartLoading, createCartError,
  getCartError,
}: Props) => {
  // index of current item in edges array
  let count = -1;

  // returns image source url
  const getImage = (num) => cart.node.lineItems.edges[num].node.variant.image.transformedSrc;

  const incrementCount = () => {
    count += 1;
    return count;
  };
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
            <List className="cart-popover-list">
              {cart.node.lineItems.edges.map((item, key) => (
                <>
                  <ListItem button key={key}>
                    <Styled.ItemContainer>
                      <Styled.ProductImgThumbnail>
                        <Styled.ProductImg
                          src={`
                        ${getImage(incrementCount())}&height=165`}
                          alt="Thumbnail"
                        />
                      </Styled.ProductImgThumbnail>
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
