/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Button, CircularProgress, Dialog, DialogContent, Typography,
} from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { LineItem, TransformedProduct } from '../PDPComponent/_types';
import { CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, GET_CART_QUERY, GetCartResponse } from '../CartController/_types';
import './_style.scss';

type Props = {
  product: TransformedProduct;
};

// Map line items to array for cart replacement
export function getLineItems(lineItems): LineItem[] {
  return lineItems.map(({ node }): LineItem => (
    { variantId: node.variant.id, quantity: node.quantity }
  ));
}

const ProductDetail: FunctionComponent<Props> = ({ product }: Props) => {
  const [cartToken, setCartToken] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(product);

  // Gets cart info to replace item if added to cart
  const {
    data: getCartData,
    loading: getCartLoading,
    error: getCartError,
  } = useQuery(GET_CART_QUERY, {
    variables: {
      checkoutId: cartToken,
    },
  });

  // Mutation replaces items in cart
  const [replaceItems, {
    data: replaceItemsData,
    loading: replaceItemsLoading,
    error: replaceItemsError,
  }] = useMutation(CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, {
    variables: {
      checkoutId: cartToken,
      lineItems: getLineItems(getCartData
        ? getCartData.node.lineItems.edges
        : []),
    },
  });

  // onClick function for Add to Cart button
  //  Gets cart items first, turns into an array,
  //  pushes new item and replaces items in cart
  const addToCart = () => {
    if (cartToken && getCartData) {
      setLoading(true);
      getLineItems(getCartData.node.lineItems.edges).push({
        variantId: product.variants.edges[0].node.id,
        quantity: 1,
      });
      replaceItems().then((res) => {
        console.log(res);
        setLoading(false);
      });
    } else {
      console.log("Can't add to cart.");
    }
  };

  // Waits for 'window' object to be availble for localStorage
  useEffect(() => {
    if (window.localStorage) {
      setCartToken(window.localStorage.getItem('shopifyCartToken'));
    }
  }, [cartToken]);

  return (
    <div id="product-detail-container">
      <div className="pdp-image">
        <img src={product.imageSrc} alt="PDP" />
      </div>
      <div className="pdp-desc">
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="body2">{product.description}</Typography>
        <div className="atc-section">
          <Typography variant="body1">
            Price: ${parseFloat(product.price).toFixed(2)}
          </Typography>
          <Button onClick={addToCart} variant="contained" color="secondary">Add to cart</Button>
        </div>
      </div>
      <Dialog open={loading}>
        <DialogContent>
          <Typography variant="h6">Adding item to cart...</Typography>
          <div className="progress-container">
            <CircularProgress />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetail;
