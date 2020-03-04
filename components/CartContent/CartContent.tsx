import React, { FunctionComponent } from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { GetCartResponse } from '../CartController/_types';
import './_style.scss';
import { getLineItems } from '../ProductDetail/ProductDetail';

type Props = {
  cart: GetCartResponse;
};

const CartContent: FunctionComponent<Props> = ({ cart }: Props) => {
  return (
    <>
      {cart && (
        <div id="cart-content">
          <Typography variant="h6">Cart</Typography>
          <List className="cart-popover-list">
            {getLineItems(cart.node.lineItems.edges).map((item, key) => (
              <ListItem button key={key}>
                {item.variantId}
              </ListItem>
            ))}
          </List>
        </div>
      )}
      {!cart && (
        <div id="cart-content">
          <Typography variant="body2">Loading...</Typography>
        </div>
      )}
    </>
  );
};

export default CartContent;
