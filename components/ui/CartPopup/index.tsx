import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { ApolloError } from 'apollo-boost';
import CartContent from 'components/CartContent';
import { Styled } from './_styles';
import LogoutButton from '../LogoutButton';
import CTAButton from '../CTAButton';
import { GetCartResponse } from './_types';

/**
 * properties
 */
interface Props {
  /** Cart data retrieved from Shopfy GraphQL API. */
  cart: GetCartResponse;
  clearCart: Function;
  total: number;
  getTotal: Function;
  createCartLoading: boolean;
  getCartLoading: boolean;
  createCartError: ApolloError;
  getCartError: ApolloError;
  getCartRefetch: Function;
  stopPolling: Function;
}

const CartPopup: FunctionComponent<Props> = ({
  cart, total, getTotal, clearCart, createCartLoading,
  getCartLoading, createCartError,
  getCartError, getCartRefetch,
  stopPolling,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  // Handler functions for IconButton
  const toggleOpen = () => {
    if (!open) {
      getCartRefetch()
        .then(() => {
          if (!getCartLoading && !getCartError && cart) {
            // Recalculate total
            getTotal(cart.node.lineItems.edges);
            setOpen(true);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (cart) {
      getTotal(cart.node.lineItems.edges);
    }
  }, [cart, getTotal]);

  return (
    <Styled.AccountButtonContainer>
      <i className="fas fa-shopping-cart" role="presentation" onClick={toggleOpen} />
      <Styled.AccountPopupContainer open={open}>
        <Styled.CartPopup>
          {cart && (
            <CartContent
              cart={cart}
              total={total}
              clearCart={clearCart}
            />
          )}
        </Styled.CartPopup>
      </Styled.AccountPopupContainer>
    </Styled.AccountButtonContainer>
  );
};

export default CartPopup;
