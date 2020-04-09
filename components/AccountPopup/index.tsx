import React, { FunctionComponent, useState, useEffect } from 'react';
import {
  Button, IconButton, Popover, Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import Link from 'next/link';
import { Styled } from './_styles';
import LogoutButton from '../LogoutButton';
import { withCustomerInfo } from '../../hocs/withCustomerInfo';
import { CustomerData } from './_types';

interface Props {
  data: any;
}

const renderPopoverContent = (
  customerData: CustomerData,
  error?: any,
) => {
  if (error) {
    return (
      <>
        <Typography variant="body2">An error has occurred.</Typography>
      </>
    );
  } if (customerData) {
    return (
      <>
        <Styled.AccountInfo>
          <Styled.PopoverTitle variant="h6">Account</Styled.PopoverTitle>
          <AccountCircle />
          {(customerData.firstName || customerData.lastName) && (
            <Typography variant="body1">
              {customerData.firstName} {customerData.lastName}
            </Typography>
          )}
          <Styled.EmailText variant="body2">
            { customerData.email }
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

const AccountPopup: FunctionComponent<Props> = ({ data }: Props) => {
  const { error, refetch } = data;
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element
  const [accessToken, setAccessToken] = useState<string>('');
  const [customerData, setCustomerData] = useState<CustomerData>(null);

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
      refetch({
        customerAccessToken: accessToken,
      })
        .then((res) => setCustomerData(res.data.customer))
        .catch((err) => console.log(err));
    }
  }, [accessToken, refetch]);

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
            {renderPopoverContent(customerData, error)}
          </Styled.PopoverContentContainer>
        </Popover>
      </div>
    </>
  );
};

export default withCustomerInfo(AccountPopup);
