import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  CircularProgress, Typography, DialogContent, Dialog, ButtonGroup, Button,
} from '@material-ui/core';
import { ProductsType, PRODUCTS_QUERY } from '../ui/ProductsGrid/_types';
import {
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION,
  GET_CART_QUERY,
  GetCartRequest,
} from '../../common/queries/checkout';
import { getLineItems } from './_types';
import { Styled as StyledThumbnail } from '../ui/ProductThumbnail/_styles';
import { Styled as StyledGrid } from '../ui/ProductsGrid/_styles';

type Props = {
  variantId: string;
  quantityButton: boolean;
  quantity: number;
};
function AddToCart({ variantId, quantityButton, quantity }: Props) {
  const [lineItems, setLineItems] = useState<any[]>(null);
  const [cartToken, setCartToken] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // determines what loading dialog text should render
  const [addButton, setAddButton] = useState<boolean>(false);

  // Gets cart info to replace item if added to cart
  const variables: GetCartRequest = {
    checkoutId: cartToken,
  };

  // Query gets list of products and information
  const {
    data,
    loading: productsLoading,
    error: productsError,
  } = useQuery<ProductsType, object>(
    PRODUCTS_QUERY,
    { variables },
  );
  const {
    data: getCartData,
    loading: getCartLoading,
    error: getCartError,
    refetch: refetchCartData,
  } = useQuery(GET_CART_QUERY, {
    skip: (!cartToken || productsLoading),
    variables,
  });

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
      setAddButton(true);
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
            refetchCartData()
              .then(() => {
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
                setLoading(false);
              });
          }).catch((error) => console.log(error));
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (getCartError) {
      console.log(getCartError);
    }
  };

  const removeFromCart = () => {
    if (cartToken && getCartData) {
      setAddButton(false);
      setLoading(true);
      refetchCartData({ checkoutId: cartToken })
        .then((res) => {
          let currentItems = res.data.node.lineItems.edges.map((item) => ({
            variantId: item.node.variant.id,
            quantity: item.node.quantity,
          }));

          const index = currentItems.findIndex(
            (item) => item.variantId === variantId,
          );
          currentItems[index].quantity -= 1;

          // remove item once it's quantity equals zero
          currentItems = currentItems.filter((item) => item.quantity !== 0);

          // Set state variable lineItems to new list and run replacement query
          setLineItems(currentItems);
          replaceItems().then(() => {
            setLoading(false);
          }).catch((error) => {
            setLoading(false);
            console.log(error);
          });
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
              {quantity}
            </Typography>
          </Button>
          <Button variant="outlined" onClick={() => removeFromCart()}>-</Button>
        </ButtonGroup>
      ))}
      <Dialog open={replaceItemsLoading}>
        <DialogContent>
          {(addButton && <Typography variant="h6">Adding item to cart...</Typography>)}
          {(!addButton && <Typography variant="h6">Removing item...</Typography>)}
          <StyledGrid.ProgressContainer>
            <CircularProgress />
          </StyledGrid.ProgressContainer>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddToCart;
