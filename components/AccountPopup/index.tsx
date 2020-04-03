import React, { FunctionComponent, useState } from 'react';
import {
  Button, IconButton, List, ListItem, Popover, Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Styled } from './_styles';

const AccountPopup: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState(null); // Anchor element

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (event) => {
    handleOpen();
    setAnchorEl(event.currentTarget);
  };

  return (
    <Styled.IconContainer>
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
            <Button variant="outlined" color="secondary">
              Log out
            </Button>
          </Styled.AccountActions>
        </Styled.PopoverContentContainer>
      </Popover>
    </Styled.IconContainer>
  );
};

export default AccountPopup;
