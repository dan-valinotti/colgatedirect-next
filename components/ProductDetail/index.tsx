/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Button, CircularProgress, Dialog, DialogContent, Typography,
} from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { LineItem, LineItemShort, TransformedProduct } from '../PDPComponent/_types';
import {
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, GET_CART_QUERY, GetCartResponse, PriceV2,
} from '../CartController/_types';
import { Styled } from './_styles';
import AddToCart from '../PDPComponent/addToCart';
import { Metafield, ProductVariant } from '../../models';

type Props = {
  product: TransformedProduct;
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

const ProductDetail: FunctionComponent<Props> = ({ product }: Props) => {
  const [cartToken, setCartToken] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [lineItems, setLineItems] = useState<any[]>(null);

  // Gets cart info to replace item if added to cart
  const {
    data: getCartData,
    loading: getCartLoading,
    error: getCartError,
  } = useQuery(GET_CART_QUERY, {
    variables: {
      checkoutId: cartToken,
      lineItems: getLineItems(lineItems),
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
      lineItems,
    },
  });

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
    <Styled.ProductDetailContainer id="product-detail-component">
      <Styled.ImageContainer>
        <Styled.ProductImage src={product.imageSrc} alt="PDP" />
      </Styled.ImageContainer>
      <Styled.DescriptionContainer>
        <Styled.ProductTitle variant="h5">{product.title}</Styled.ProductTitle>
        <Styled.ProductDescription variant="body2">{product.description}</Styled.ProductDescription>
        <Styled.ATCContainer>
          <Typography variant="body1">
            Price: ${parseFloat(product.price).toFixed(2)}
          </Typography>
          <AddToCart variantId={product.id} quantityButton={false} quantity={0} />
        </Styled.ATCContainer>
      </Styled.DescriptionContainer>
    </Styled.ProductDetailContainer>
  );
};

export default ProductDetail;
