import React, { FunctionComponent } from 'react';
import {
  Button, List, ListItem, Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { GetCartResponse } from '../CartController/_types';
import { getLineItems } from '../ProductDetail/ProductDetail';
import { Styled } from './_styles';

type Props = {
  cart: GetCartResponse;
  total: number;
  clearCart: Function;
};

const CartContent: FunctionComponent<Props> = ({ cart, total, clearCart }: Props) => (
  <>
    { console.log(cart.node.lineItems.edges) }
    {cart && (
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
        <Link href={{ pathname: '/cart', query: { total } }}>
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
