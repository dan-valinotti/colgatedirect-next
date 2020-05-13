import React from 'react';
import {
  Button, List, ListItem, Typography,
} from '@material-ui/core';
import Link from 'next/link';
import { GetCartResponse } from '../../common/queries/checkout';
import { Styled } from './_styles';
import AddToCart from '../PDPComponent/AddAndRemoveProduct';
import CTAButton from '../ui/CTAButton';

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
    {cart && (
      <Styled.Container>
        <h6>Cart</h6>
        <ul className="cart-popover-list">
          {cart.node.lineItems.edges.map((item, key) => (
            <li key={key}>
              <Styled.ItemContainer>
                <h6 className="itemName">{item.node.title}</h6>
                <div className="quantityButton">
                  <AddToCart
                    variantId={item.node.variant.id}
                    quantityButton
                    quantity={item.node.quantity}
                  />
                </div>
                <h6 className="itemPrice">
                  ${(item.node.variant.priceV2.amount * item.node.quantity).toFixed(2)}
                </h6>

              </Styled.ItemContainer>
            </li>
          ))}
          <Styled.CartListItem>
            <h6 className="totalTitle">Total:</h6>
            <h6 className="total">
              ${total.toFixed(2)}
            </h6>
          </Styled.CartListItem>
        </ul>
        {total > 0 && (
          <Styled.ButtonContainer>
            <Link href={{ pathname: '/cart', query: { total } }}>
              <CTAButton
                color="primary"
                text="Cart Overview"
                id="cart-overview-btn"
                onClick={() => null}
              />
            </Link>
            <CTAButton
              color="secondary"
              text="Clear Cart"
              id="clear-cart-btn"
              onClick={() => clearCart()}
            />
          </Styled.ButtonContainer>
        )}
      </Styled.Container>
    )}
    {!cart && (
      <div id="cart-content">
        <p>Loading...</p>
      </div>
    )}
  </>
);


export default CartContent;
