import React, { useState, useEffect } from 'react';
import {
  Button, List, ListItem, Typography, CircularProgress, ButtonGroup, Dialog, DialogContent,
} from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  GetCartResponse,
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, GET_CART_QUERY, PriceV2,
} from '../CartController/_types';
import { LineItemsInput } from '../ProductThumbnail/_types';


type Props = {
  cart: GetCartResponse;
  index: number;
};
// Map line items to array for cart replacement
export function getLineItems(lineItems): object[] {
  if (lineItems) {
    return lineItems.map((item): object => {
      if (item.node) {
        // console.log(`Item with node:`, item.node);
        return {
          variantId: item.node.variant.id,
          quantity: item.node.quantity,
        };
      }
      // console.log(`Item:`, item);
      return {
        variantId: item.id,
        quantity: item.quantity,
      };
    });
  }

  return [];
}

const QuantityButtons = ({
  cart, index,
}: Props) => {
  const [cartToken, setCartToken] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(cart.node.lineItems.edges[index].node.quantity);
  const [lineItems, setLineItems] = useState<any[]>(null);

  // onClick function for Add to Cart button
  //  Gets cart items first, turns into an array,
  //  pushes new item and replaces items in cart
  const addToCart = () => {
    if (cart) {
      setLoading(true);
      cart.node.lineItems.edges[index].node.quantity += 1;
      setQuantity(cart.node.lineItems.edges[index].node.quantity);


    } else {
      console.log("Error");
    }
  };
  useEffect(() => {

  })
  /*
    const addToCart = () => {
      if (cart) {
        setLoading(true);
        const currentItems = cart.node.lineItems.edges;
        if (currentItems.some((item) => item.node.variantId === product.variant.id)) {
          const index = currentItems.findIndex(
            (item) => item.node.variantId === product.variant.id,
          );
          currentItems[index].node.quantity += 1;
        } else {
          currentItems.push({
            variantId: product.variant.id,
            quantity: 1,
          });
        }
        setLineItems(currentItems);
        replaceItems().then((res) => {
          setLoading(false);
        }).catch((error) => console.log(error));
      } else {
        // console.log("Can't add to cart.");
      }
    }; */

  return (
    <>
      <ButtonGroup>
        <Button variant="outlined" onClick={() => addToCart()}>+</Button>
        <Button variant="outlined" disabled>
          <Typography variant="body2" style={{ color: 'black' }}>
            {quantity}
          </Typography>
        </Button>
        <Button variant="outlined">-</Button>
      </ButtonGroup>
    </>
  );
};
export default QuantityButtons;
