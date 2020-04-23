import React, { FunctionComponent } from 'react';
import {
  Button, ButtonGroup, List, ListItem, Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { GetCartResponse } from '../CartController/_types';
import { Styled } from './_styles';
import AddToCart from '../PDPComponent/AddAndRemoveProduct';

type Props = {
  cart: GetCartResponse;
  total: number;
  clearCart: Function;
};

const CartContent: FunctionComponent<Props> = ({ cart, total, clearCart }: Props) => (
  <>
    {console.log(cart.node.lineItems.edges)}
    {cart && (
      <Styled.Container>
        <Typography variant="h6">Cart</Typography>
        <List style={{ minWidth: '250px' }}>
          {cart.node.lineItems.edges.map((item, key) => (
            <ListItem key={key}>
              <Styled.ItemContainer>
                <Typography variant="h6" className="itemName">{item.node.title}</Typography>
                {console.log(item)}
                <div className="quantityButton">
                  <AddToCart
                    variantId={item.node.variant.id}
                    quantityButton
                    quantity={item.node.quantity}
                  />
                </div>
                <Typography variant="h6" className="itemPrice">
                  ${(item.node.variant.priceV2.amount * item.node.quantity).toFixed(2)}
                </Typography>

              </Styled.ItemContainer>
            </ListItem>
          ))}
          <Styled.CartListItem>
            <Typography variant="h6" className="totalTitle">Total:</Typography>
            <Typography variant="h6" className="total">
              ${total.toFixed(2)}
            </Typography>
          </Styled.CartListItem>
        </List>
        {total > 0 && (
          <>
            <Link href={{ pathname: '/cart', query: { total } }}>
              <Button variant="contained" color="secondary">Cart Overview</Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: '1rem' }}
              onClick={() => clearCart()}
            >
              Clear cart
            </Button>
          </>
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
