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
  withCustomerInfo,
  CUSTOMER_INFO_QUERY,
  GetCustomerInfoResponse,
  GetCustomerInfoVariables,
} from '../../hocs/withCustomerInfo';
import { CustomerData } from './_types';


interface Props {
  data: any;
}

const renderPopoverContent = (
  customerData: GetCustomerInfoResponse,
  error?: any,
) => {
  if (error) {
    console.log(error);
  }
  if (customerData) {
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
          variant="outlined"
          color="secondary"
        >
          Log in
        </Button>
      </Link>
    </Styled.Container>
  );
};

const AccountPopup: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element
  const [accessToken, setAccessToken] = useState<string>('');

  /*
  * GraphQL Queries
  * */
  const {
    data: getCustomerData,
    error: getCustomerError,
    refetch: refetchCustomerData,
  } = useQuery<GetCustomerInfoResponse>(CUSTOMER_INFO_QUERY, {
    variables: {
      customerAccessToken: accessToken,
    },
    skip: (!accessToken || accessToken === ''),
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (event) => {
    handleOpen();
    setAnchorEl(event.currentTarget);
  };

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
