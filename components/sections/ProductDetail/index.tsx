/* eslint-disable react/jsx-one-expression-per-line */
import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Typography, Dialog, DialogContent, CircularProgress,
} from '@material-ui/core';
import { useMutation, useQuery } from '@apollo/react-hooks';
import CTAButton from 'components/ui/CTAButton';
import {
  getLineItems,
} from '../../PDPComponent/_types';
import {
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, GET_CART_QUERY, TransformedProduct,
} from '../../../common/queries/checkout';
import { Styled } from './_styles';
import AddToCart from '../../PDPComponent/AddAndRemoveProduct';
import { Heading, Paragraph } from '../../ui/Typography';


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
    refetch: refetchCartData,
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
      lineItems,
    },
  });

  const addToCart = () => {
    if (cartToken && getCartData) {
      refetchCartData({ checkoutId: cartToken })
        .then((res) => {
          const variantId = product.variant.id;
          console.log(variantId);
          const currentItems = res.data.node.lineItems.edges.map((item) => ({
            variantId: item.node.variant.id,
            quantity: item.node.quantity,
          }));
          // Check if product already exists in cart
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
              .catch((error) => {
                console.log(error);
              });
          }).catch((error) => console.log(error));
        });
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
    <Styled.ProductDetailContainer id="product-detail-component">
      <Styled.ImageContainer>
        <Styled.ProductImage src={product.imageSrc} alt="PDP" />
      </Styled.ImageContainer>
      <Styled.DescriptionContainer>
        <Heading as="h1">
          {product.title}
        </Heading>
        <Paragraph>
          {product.description}
        </Paragraph>
        <Styled.ATCContainer>
          <Paragraph>
            Price: ${parseFloat(product.price).toFixed(2)}
          </Paragraph>
          <CTAButton id="atc" onClick={addToCart} text="Add to cart" color="secondary" />
        </Styled.ATCContainer>
      </Styled.DescriptionContainer>
      {replaceItemsLoading && (
        <Dialog open={replaceItemsLoading}>
          <DialogContent>
            <Typography variant="h6">Adding item to cart...</Typography>
            <Styled.LoadingContainer>
              <CircularProgress />
            </Styled.LoadingContainer>
          </DialogContent>
        </Dialog>
      )}
    </Styled.ProductDetailContainer>
  );
};

export default ProductDetail;
