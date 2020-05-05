import React from 'react';
import {
  Button, List, ListItem, Typography, CircularProgress, Dialog, DialogContent,
} from '@material-ui/core';
import Link from 'next/link';
import { ApolloError } from 'apollo-boost';
import { GetCartResponse } from '../CartController/_types';
import { Styled } from './_styles';
import AddToCart from '../PDPComponent/AddAndRemoveProduct';

type Props = {
  cart: GetCartResponse;
  clearCart: Function;
  loading: boolean;
  total: number;
  getTotal: Function;
  createCartLoading: boolean;
  getCartLoading: boolean;
  createCartError: ApolloError;
  getCartError: ApolloError;
  getCartRefetch: Function;
};


const CartContentRow = ({
  cart, clearCart, total, loading, createCartLoading, getCartLoading, createCartError,
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
                      <div className="quantityButtons">
                        <AddToCart
                          variantId={item.node.variant.id}
                          quantityButton
                          quantity={item.node.quantity}
                        />
                      </div>
                      <Typography variant="h6" className="itemPrice">
                        ${(item.node.variant.priceV2.amount * item.node.quantity).toFixed(2)}
                      </Typography>
                      <div />
                    </Styled.ItemContainer>
                  </ListItem>
                  {key === cart.node.lineItems.edges.length - 1 && (
                    <Styled.CartListItem>

                      <Typography variant="h6">Total:</Typography>
                      <Typography variant="h6" className="total">
                        ${total.toFixed(2)}
                      </Typography>

                    </Styled.CartListItem>
                  )}
                </>
              ))}
            </List>
            {total < 1 && (
              <Styled.EmptyCartButton>
                <Link href="/">
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ alignItems: 'center' }}
                  >Back To Main Page
                  </Button>
                </Link>
              </Styled.EmptyCartButton>
            )}
            {total > 0 && (
              <>
                <Styled.ButtonContainer>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{ marginLeft: '1rem' }}
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </Button>
                  <a href={cart.node.webUrl} rel="noopener noreferrer" target="_blank">
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      style={{ marginLeft: '1rem' }}
                    >
                      Checkout
                    </Button>
                  </a>
                </Styled.ButtonContainer>

              </>
            )}
            <Dialog open={loading}>
              <DialogContent>
                <Typography variant="h6">Removing items...</Typography>
                <Styled.ProgressContainer>
                  <CircularProgress />
                </Styled.ProgressContainer>
              </DialogContent>
            </Dialog>
          </Styled.Container>

        )}
    </div>
  );
};

export default CartContentRow;
