import React, { FunctionComponent } from 'react';
import {
  Button, List, ListItem, Typography,
} from '@material-ui/core';
import { GetCartResponse } from '../CartController/_types';
import { getLineItems } from '../ProductDetail/ProductDetail';
import { Styled } from './_styles';
import Link from "next/link";

type Props = {
  cart: GetCartResponse;
};

const CartContent: FunctionComponent<Props> = ({ cart }: Props) => (
  <>
    {cart && (
      <Styled.Container>
        <Typography variant="h6">Cart</Typography>
        <List className="cart-popover-list">
          {getLineItems(cart.node.lineItems.edges).map((item, key) => (
            <ListItem button key={key}>
              {item.variantId}
            </ListItem>
          ))}
        </List>
        <Link href="/cart">
          <Button variant="contained" color="secondary">Cart Overview</Button>
        </Link>
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
