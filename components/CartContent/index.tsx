import React from 'react';
import {
  Button, List, ListItem, Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { GetCartResponse } from '../CartController/_types';
import { Styled } from './_styles';
import AddToCart from '../PDPComponent/AddAndRemoveProduct';

/**
 * properties
 */
type Props = {
  /**
   * Cart data retrieved from Shopify GraphQL API.
   */
  cart: GetCartResponse;
  /**
   * Total cost of all items in cart.
   */
  total: number;
  /**
   * Function to be executed when user clicks "Clear Cart" button.
   */
  clearCart: Function;
};

/**
 * Displays content of Cart popup window.
 * @visibleName CartContent
 */
const CartContent: React.FC<Props> = ({ cart, total, clearCart }: Props) => (
  <>
    {console.log(cart.node.lineItems.edges)}
    {cart && (
      <Styled.Container>
        <Typography variant="h6">Cart</Typography>
        <List className="cart-popover-list">
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
