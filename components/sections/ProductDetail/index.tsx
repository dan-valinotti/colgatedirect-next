/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  TransformedProduct, getLineItems,
} from '../../PDPComponent/_types';
import {
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, GET_CART_QUERY,
} from '../../CartController/_types';
import { Styled } from './_styles';
import AddToCart from '../../PDPComponent/AddAndRemoveProduct';
import { Heading } from '../../ui/Typography';


type Props = {
  /** Product data retrieved from Shopify GraphQL API. */
  product: TransformedProduct;
};

/**
 * Renders the default PDP layout of a product.
 */
const ProductDetail: FunctionComponent<Props> = ({ product }: Props) => {
  const [cartToken, setCartToken] = useState<string>(null);
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
        <Heading as="h1">
          {product.title}
        </Heading>
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
