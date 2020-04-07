import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import {
  Button, List, ListItem, Typography, CircularProgress, ButtonGroup,
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
  cart, clearCart, total, createCartLoading, getCartLoading, createCartError,
  getCartError,
}: Props) => {
  // index of current item in edges array
  let count = -1;

  // returns image source url
  const getImage = (num) => cart.node.lineItems.edges[num].node.variant.image.transformedSrc;
  // const des = cart.node.lineItems.edges[0].node.handle.description;
  const incrementCount = () => {
    count += 1;
    return count;
  };
  return (
    <div>
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
            <List className="cart-overview-list">
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
                      <Typography variant="h6" className="itemName">{item.node.title}</Typography>
                      <ButtonGroup>
                        <Button variant="outlined">+</Button>
                        <Button variant="outlined" disabled>
                          <Typography variant="body2" style={{ color: 'black' }}>
                            {item.node.quantity}
                          </Typography>
                        </Button>
                        <Button variant="outlined">-</Button>
                      </ButtonGroup>
                      <Typography variant="h6" className="itemPrice">
                        ${item.node.variant.priceV2.amount * item.node.quantity}
                      </Typography>
                    </Styled.ItemContainer>
                  </ListItem>
                  {key === cart.node.lineItems.edges.length - 1 && (
                    <Styled.CartListItem>
                      <Styled.ItemContainer>
                        <Typography variant="h6" className="total">Total:</Typography>
                        <Typography variant="h6">
                          ${total}
                        </Typography>
                      </Styled.ItemContainer>
                    </Styled.CartListItem>
                  )}
                </>
              ))}
            </List>
            {total > 0 && (
              <Button
                variant="contained"
                color="secondary"
                style={{ marginLeft: '1rem' }}
                onClick={() => clearCart()}
              >
                Clear cart
              </Button>
            )}
          </Styled.Container>
        )}
    </div>
  );
};

export default withData(CartContentRow);
