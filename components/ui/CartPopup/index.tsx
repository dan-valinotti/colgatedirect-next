import React, { FunctionComponent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { ApolloError } from 'apollo-boost';
import CartContent from 'components/CartContent';
import { Styled } from './_styles';
import LogoutButton from '../LogoutButton';
import CTAButton from '../CTAButton';
import { GetCartResponse } from '../../../common/queries/checkout';
import usePopupVisible from '../NavBarIconClickOut/usePopupVisible';
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
  const { ref, isPopupVisible, setIsPopupVisible } = usePopupVisible(true);
  // Handler functions for IconButton
  const toggleOpen = () => {
    if (!open) {
      setIsPopupVisible(true);
      setOpen(true);
      getCartRefetch()
        .then(() => {
          if (!getCartLoading && !getCartError && cart) {
            // Recalculate total
            getTotal(cart.node.lineItems.edges);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setIsPopupVisible(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (cart) {
      getTotal(cart.node.lineItems.edges);
    }
    if (!isPopupVisible) {
      setOpen(false);
    }
  }, [cart, getTotal, isPopupVisible]);

  return (
    <div ref={ref}>
      <Styled.CartButtonContainer>
        <i className="fas fa-shopping-cart" role="presentation" onClick={toggleOpen} />
        {isPopupVisible && (
        <Styled.CartPopupContainer open={open}>
          <Styled.CartPopup>
            {cart && (
            <CartContent
              cart={cart}
              total={total}
              clearCart={clearCart}
            />
            )}
          </Styled.CartPopup>
        </Styled.CartPopupContainer>
        )}
      </Styled.CartButtonContainer>
    </div>
  );
};

export default CartPopup;
