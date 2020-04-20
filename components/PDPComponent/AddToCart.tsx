import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  CircularProgress, Typography, DialogContent, Dialog, ButtonGroup, Button,
} from '@material-ui/core';
import { ProductsType, PRODUCTS_QUERY } from '../ProductsGrid/_types';
import { CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, GET_CART_QUERY, GetCartRequest } from '../CartController/_types';
import { getLineItems } from '../ProductDetail';
import { Styled as StyledThumbnail } from '../ProductThumbnail/_styles';
import { Styled as StyledGrid } from '../ProductsGrid/_styles';

type Props = {
  variantId: string;
  quantityButton: boolean;
  quantity: number;
};
function AddToCart({ variantId, quantityButton, quantity }: Props) {
  const [lineItems, setLineItems] = useState<any[]>(null);
  const [cartToken, setCartToken] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Gets cart info to replace item if added to cart
  const variables: GetCartRequest = {
    checkoutId: cartToken,
  };
  const {
    data: getCartData,
    loading: getCartLoading,
    error: getCartError,
    refetch: refetchCartData,
  } = useQuery(GET_CART_QUERY, {
    skip: !cartToken,
    variables,
    pollInterval: 750,
  });

  // Query gets list of products and information
  const {
    data,
    loading: productsLoading,
    error: productsError,
  } = useQuery<ProductsType, object>(
    PRODUCTS_QUERY,
    { variables },
  );

  // Mutation replaces items in cart
  const [replaceItems, {
    data: replaceItemsData,
    loading: replaceItemsLoading,
    error: replaceItemsError,
  }] = useMutation(CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, {
    variables: {
      checkoutId: cartToken,
      lineItems,
    },
  });

  const addToCartFunc = () => {
    if (cartToken && getCartData) {
      setLoading(true);
      /* Updated:
             * Add refetchCartData function call to get current cart information before adding
             * new item to list. Previous implementation was using lineItems value from initial
             * render, not taking into account the cart clearing or other items changing.
             * */
      refetchCartData({ checkoutId: cartToken })
        .then((res) => {
          /*
                     * Map data returned from GraphQL query to only include values necessary for
                     * checkoutLineItemsReplace mutation (variantId and quantity)
                     */
          const currentItems = res.data.node.lineItems.edges.map((item) => ({
            variantId: item.node.variant.id,
            quantity: item.node.quantity,
          }));
          /*
                    * Check if item exists in cart already
                    * If true, increment quantity of item by 1
                    * Else, push new item to lineItems
                    * */
          if (currentItems.some((item) => item.variantId === variantId)) {
            const index = currentItems.findIndex(
              (item) => item.variantId === variantId,
            );
            currentItems[index].quantity += 1;
          } else {
            currentItems.push({
              variantId,
              quantity: 1,
            });
          }
          // Set state variable lineItems to new list and run replacement query
          setLineItems(currentItems);
          replaceItems().then(() => {
            setLoading(false);
            console.log(lineItems);
          }).catch((error) => console.log(error));
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (getCartError) {
      console.log(getCartError);
    }
  };

  // Waits for 'window' object to be availble for localStorage
  useEffect(() => {
    if (window.localStorage) {
      setCartToken(window.localStorage.getItem('shopifyCartToken'));
    }
    if (getCartData && !lineItems) {
      setLineItems(getLineItems(getCartData.node.lineItems.edges));
    }
  }, [cartToken, getCartData, lineItems]);

  return (
    <>
      {(!quantityButton
        && (
          <StyledThumbnail.ProductButton
            className="atc-btn"
            variant="contained"
            color="secondary"
            onClick={() => addToCartFunc()}
          >
            Add to cart
          </StyledThumbnail.ProductButton>
        ))}
      {(quantityButton && (
        <ButtonGroup>
          <Button variant="outlined" onClick={() => addToCartFunc()}>+</Button>
          <Button variant="outlined" disabled>
            <Typography variant="body2" style={{ color: 'black' }}>
              {quantity}{console.log(variantId)}
            </Typography>
          </Button>
          <Button variant="outlined">-</Button>
        </ButtonGroup>
      ))}
      <Dialog open={replaceItemsLoading}>
        <DialogContent>
          <Typography variant="h6">Adding item to cart...</Typography>
          <StyledGrid.ProgressContainer>
            <CircularProgress />
          </StyledGrid.ProgressContainer>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddToCart;
