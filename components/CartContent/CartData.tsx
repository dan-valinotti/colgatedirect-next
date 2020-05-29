// Has main cart data which is passed to CartController for the cart popup
// and CartContentRow for the cart overview page
import React, { useEffect, useState, useCallback } from 'react';
import { useMutation, useQuery, useApolloClient } from '@apollo/react-hooks';
import {
  CREATE_CART_QUERY,
  CreateCartResponse,
  GetCartRequest,
  GET_CART_QUERY,
  CreateCartRequest,
  CHECKOUT_LINE_ITEMS_REPLACE_MUTATION,
} from '../../common/queries/checkout';
import CartController from '../CartController';
import CartContentRow from '../CartContentRow/CartContentRow';
import CartPopup from '../ui/CartPopup/index';
import { withApollo } from '../../lib/apollo';

// Container component for the Cart that handles checking if a cart exists,
// as well as retrieving the cart info and items.
const CartData = (parentComponent) => {
  // State variable declaration
  const [cartToken, setCartToken] = useState<string>(null); // Check for cart token
  // const [open, setOpen] = useState<boolean>(false); // Open/close state of popup
  // const [anchorEl, setAnchorEl] = React.useState(null); // Anchor element
  const [total, setTotal] = useState<number>(-1); // Total cart price
  const [totalLoading, setTotalLoading] = useState<boolean>(true);
  const [lineItems, setLineItems] = useState<object[]>([]);
  const client = useApolloClient();
  const [loading, setLoading] = useState<boolean>(false);


  // Create new cart if token does not exist
  const createVars: CreateCartRequest = {
    input: {},
  };
  const [createCart, {
    data: createCartData,
    loading: createCartLoading,
    error: createCartError,
  }] = useMutation<CreateCartResponse>(CREATE_CART_QUERY, {
    variables: createVars,
  });

  // Get cart data
  const variables: GetCartRequest = {
    checkoutId: cartToken,
  };
  const {
    data: getCartData,
    loading: getCartLoading,
    error: getCartError,
    refetch: getCartRefetch,
    stopPolling,
  } = useQuery(GET_CART_QUERY, {
    skip: !cartToken,
    variables,
  });

  // Mutation replaces items in cart
  const [replaceItems] = useMutation(CHECKOUT_LINE_ITEMS_REPLACE_MUTATION, {
    variables: {
      checkoutId: cartToken,
      lineItems,
    },
  });


  // Gets total from getCartData
  const getTotal = useCallback((priceTotalV2) => {
    setTotalLoading(true);
    setTotal(parseFloat(priceTotalV2));
    setTotalLoading(false);
  }, [setTotalLoading, setTotal]);

  const clearCart = () => {
    setLoading(true);
    setLineItems([]);
    replaceItems()
      .then(() => {
        getCartRefetch()
          .then(() => {
            setLoading(false);
            getTotal([]);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      });
  };

  // Function run to progressively check status of GraphQL queries
  // Necessary to run logic for cart status checking and check status
  // of localStorage (can't be accessed until page is rendered on browser)
  // Example: check localStorage -> no cartToken -> createCart
  useEffect(() => {
    // If cart data is retrieved, write that data to the Apollo cache
    if (getCartData) {
      client.writeData({
        data: {
          lineItems: getCartData.node.lineItems.edges.filter((item) => item.variantId),
        },
      });
      getTotal(getCartData.node.totalPriceV2.amount);
    }
    // If localStorage exists and getCart did not give a response yet
    if (window.localStorage && !getCartData) {
      // Set 'shopifyCartToken' item in localStorage
      setCartToken(window.localStorage.getItem('shopifyCartToken'));

      // If value applied was undefined, create new token
      if (!window.localStorage.getItem('shopifyCartToken')) {
        createCart();
      }
    }

    // To be executed after new cart is created
    const onCompleted = (res) => {
      // If response is OK, set localStorage and state cartTokens
      if (res) {
        setCartToken(res.checkoutCreate.checkout.id);
        localStorage.setItem('shopifyCartToken', cartToken);
      }
    };

    // To be executed after create cart error
    const onError = (error) => <div>{error}</div>;

    // Logic for traversing completion/error/loading
    if (onCompleted || onError) {
      if (onCompleted && !createCartLoading && !createCartError) {
        onCompleted(createCartData);
      } else if (onError && !createCartLoading && createCartError) {
        onError(createCartError);
      }
    }
  }, [
    cartToken,
    client,
    createCart,
    createCartData,
    createCartError,
    createCartLoading,
    getCartData,
    getTotal,
    total,
  ]); // If one of these variables is changed, useEffect() is run again.

  const cartProps = {
    cart: getCartData,
    clearCart,
    loading,
    total,
    getTotal,
    createCartLoading,
    getCartLoading,
    createCartError,
    getCartError,
    getCartRefetch,
    stopPolling,
  };
  return (
    <>
      {(getCartData) && (console.log(getCartData.node.totalPriceV2.amount))}
      {parentComponent.parentComponent === 'NavBar' && cartProps.cart && <CartController {...cartProps} />}
      {parentComponent.parentComponent === 'CartOverview' && cartProps.cart && <CartContentRow {...cartProps} />}
      {parentComponent.parentComponent === 'NavIconButtons' && cartProps.cart && <CartPopup {...cartProps} />}
    </>

  );
};

export default withApollo({ ssr: true })(CartData);
