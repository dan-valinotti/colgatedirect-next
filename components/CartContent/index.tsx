import React, { FunctionComponent } from 'react';
import {
  Button, ButtonGroup, List, ListItem, Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { GetCartResponse } from '../CartController/_types';
import { Styled } from './_styles';

type Props = {
  cart: GetCartResponse;
  total: number;
  clearCart: Function;
};

const CartContent: FunctionComponent<Props> = ({ cart, total, clearCart }: Props) => (
  <>
    {cart && (
      <Styled.Container>
        <Typography variant="h6">Cart</Typography>
        <List className="cart-popover-list">
          {cart.node.lineItems.edges.map((item, key) => (
            <>
              <ListItem key={key}>
                <Styled.ItemContainer>
                  <Typography variant="h6">{item.node.title}</Typography>
                  <ButtonGroup>
                    <Button variant="outlined">+</Button>
                    <Button variant="outlined" disabled>
                      <Typography variant="body2" style={{ color: 'black' }}>
                        {item.node.quantity}
                      </Typography>
                    </Button>
                    <Button variant="outlined">-</Button>
                  </ButtonGroup>
                  <Typography variant="h6">
                    ${(item.node.variant.priceV2.amount * item.node.quantity).toFixed(2)}
                  </Typography>
                </Styled.ItemContainer>
              </ListItem>
              {key === cart.node.lineItems.edges.length - 1 && (
                <Styled.CartListItem>
                  <Styled.ItemContainer>
                    <Typography variant="h6">Total:</Typography>
                    <Typography variant="h6">
                      ${total.toFixed(2)}
                    </Typography>
                  </Styled.ItemContainer>
                </Styled.CartListItem>
              )}
            </>
          ))}
        </List>
        <Link href="/cart">
          <Button variant="contained" color="secondary">Cart Overview</Button>
        </Link>
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
    {!cart && (
      <div id="cart-content">
        <Typography variant="body2">Loading...</Typography>
      </div>
    )}
  </>
);


export default CartContent;
