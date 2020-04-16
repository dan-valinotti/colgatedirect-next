import React, { FunctionComponent, useState, useEffect } from 'react';
import {
  Button, IconButton, Popover, Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { Styled } from './_styles';
import LogoutButton from '../LogoutButton';
import {
  CUSTOMER_INFO_QUERY,
  GetCustomerInfoResponse,
} from '../../hocs/withCustomerInfo';

/*
* Function - renderPopoverContent
* Returns nodes to be rendered on AccountPopup depending on login status.
*   @param customerData: data response from GraphQL API
*   @param error: error response from GraphQL API
* */
const renderPopoverContent = (
  customerData: GetCustomerInfoResponse,
  error?: any,
) => {
  if (!error && customerData) {
    const { customer } = customerData;
    return (
      <>
        <Styled.AccountInfo>
          <Styled.PopoverTitle variant="h6">Account</Styled.PopoverTitle>
          <AccountCircle />
          {(customer.firstName || customer.lastName) && (
          <Typography variant="body1">
            {customer.firstName} {customer.lastName}
          </Typography>
          )}
          <Styled.EmailText variant="body2">
            { customer.email }
          </Styled.EmailText>
        </Styled.AccountInfo>
        <Styled.AccountActions>
          <Button variant="outlined" color="primary">
            Settings
          </Button>
          <LogoutButton />
        </Styled.AccountActions>
      </>
    );
  } return (
    <Styled.Container>
      <Link href="/login">
        <Button
          id="login-btn"
          variant="outlined"
          color="secondary"
        >
          Log in
        </Button>
      </Link>
    </Styled.Container>
  );
};

/*
* Component - AccountPopup <FunctionComponent>
*   @state open <boolean> - Handle popup open state
*   @state anchorEl <node> - HTML element popup is anchored to
*   @state accessToken <string> - customerAccessToken from GraphQL API
*   @query getCustomer <GetCustomerInfoResponse>
* */
const AccountPopup: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element
  const [accessToken, setAccessToken] = useState<string>('');

  /*
  * GraphQL Queries
  * getCustomer: retrieves customer data from Shopify GraphQL API
  *   using 'customerAccessToken' variable
  *   - Request interface: none
  *   - Response interface: GetCustomerInfoResponse
  * */
  const {
    data: getCustomerData,
    error: getCustomerError,
    refetch: refetchCustomerData,
  } = useQuery<GetCustomerInfoResponse>(CUSTOMER_INFO_QUERY, {
    variables: {
      customerAccessToken: accessToken,
    },
    // Skip query execution if accessToken is not retrieved from
    //  localStorage, or if user is not logged in
    skip: (!accessToken || accessToken === ''),
  });

  // Handler functions for IconButton
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (event) => {
    handleOpen();
    setAnchorEl(event.currentTarget);
  };

  /*
  * useEffect() - monitor 'window' variable to wait for client browser to be
  *   detected, then retrieve 'customerAccessToken' from localStorage. If value
  *   is not empty, attempt to retrieve customer data
  * */
  useEffect(() => {
    if (window && window.localStorage) {
      setAccessToken(window.localStorage.getItem('customerAccessToken'));
    }
    if (accessToken && accessToken !== '') {
      refetchCustomerData()
        .catch((err) => console.log(err));
    }
  }, [accessToken, refetchCustomerData]);

  return (
    <>
      <div>
        <IconButton
          id="account-btn"
          edge="end"
          color="inherit"
          aria-label="cart"
          onClick={handleClick}
        >
          <AccountCircle />
        </IconButton>
        <Popover
          open={open}
          onClose={handleClose}
          disableScrollLock
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Styled.PopoverContentContainer>
            {renderPopoverContent(getCustomerData, getCustomerError)}
          </Styled.PopoverContentContainer>
        </Popover>
      </div>
    </>
  );
};

export default AccountPopup;
