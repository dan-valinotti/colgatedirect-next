import React, { FunctionComponent, useState, useEffect } from 'react';
import {
  Button, IconButton, Popover,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Styled } from './_styles';
import LogoutButton from '../LogoutButton';
import { withCustomerInfo } from '../../hocs/withCustomerInfo';
import { CustomerData } from './_types';

interface Props {
  data: any;
}

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
      {customerData && !error && (
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
              <Styled.AccountInfo>
                <Styled.PopoverTitle variant="h6">Account</Styled.PopoverTitle>
                <AccountCircle />
                <Styled.EmailText variant="body2">dan33east@gmail.com</Styled.EmailText>
              </Styled.AccountInfo>
              <Styled.AccountActions>
                <Button variant="outlined" color="primary">
                  Settings
                </Button>
                <LogoutButton />
              </Styled.AccountActions>
            </Styled.PopoverContentContainer>
          </Popover>
        </div>
      )}
    </>
  );
};

export default withCustomerInfo(AccountPopup);
