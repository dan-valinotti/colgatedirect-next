import React, { FunctionComponent, useEffect, useState } from 'react';
import Router from 'next/router';
import validator from 'validator';
import {
  CircularProgress,
  Dialog, DialogContent,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useMutation } from '@apollo/react-hooks';
import { AccountCircle, VpnKey } from '@material-ui/icons';
import { Styled } from './_styles';
import {
  CustomerLoginQuery, CustomerLoginRequest, CustomerLoginResponse, ErrorStatus,
} from './_types';

/*
* LoginForm - component that controls the process of logging in/handling
* login failures on the /login page.
* */
const LoginForm: FunctionComponent = () => {
  // State variable definitions
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fieldUpdated, setFieldUpdated] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  // Login error response state
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>({
    status: false,
  });
  // Login mutation variables
  const [variables, setVariables] = useState<CustomerLoginRequest>({
    email,
    password,
  });

  /*
  * GraphQL Requests:
  * submitLoginRequest - mutation that attempts to create a customerAccessToken
  *   - Request interface:  CustomerLoginRequest
  *   - Response interface: CustomerLoginResponse
  * */
  const [submitLoginRequest, { data: submitLoginData }] = useMutation<CustomerLoginResponse>(
    CustomerLoginQuery,
    {
      variables: {
        input: variables,
      },
    },
  );

  // onClose event for error Snackbar component
  const handleSnackbarClose = () => {
    setErrorStatus({ ...errorStatus, status: false });
  };

  // onChange event for email TextField
  const updateEmail = (event) => {
    setEmail(event.target.value);
    setVariables({ email: event.target.value, password });
  };

  // onChange event for password TextField
  const updatePassword = (event) => {
    setPassword(event.target.value);
    setVariables({ email, password: event.target.value });
    setFieldUpdated(true);
  };

  // Attempt customer login
  const submitLogin = () => {
    setDialogOpen(true);
    submitLoginRequest()
      .then((res) => {
        // Check if access token was returned from API
        if (res.data.customerAccessTokenCreate.customerAccessToken) {
          window.localStorage.setItem(
            'customerAccessToken',
            res.data.customerAccessTokenCreate.customerAccessToken.accessToken,
          );
          // Go to homepage
          Router.push('/')
            .catch((error) => console.log(error));
        } else {
          setDialogOpen(false);
          // If access token is null, there was an error - set error status
          setErrorStatus({
            status: true,
            code: res.data.customerAccessTokenCreate.customerUserErrors[0].code,
            message: res.data.customerAccessTokenCreate.customerUserErrors[0].message,
          });
        }
      })
      .catch((error) => {
        // This error only occurs due to network events, not a login failure
        setDialogOpen(false);
        console.log(error);
      });
  };

  useEffect(() => {
    // If user is already logged in, go to home page
    if (window && window.localStorage.getItem('customerAccessToken')) {
      Router.push('/')
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <Styled.Container>
      <Styled.FormContainer>
        <Typography variant="h4">Log In</Typography>
        <Styled.FormFieldContainer>
          <TextField
            id="email"
            label="Email"
            value={email}
            error={email !== '' && validator.isEmail(email)}
            onChange={(event) => updateEmail(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ width: '2rem' }}>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            error={!fieldUpdated && password === ''}
            onChange={(event) => updatePassword(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ width: '2rem' }}>
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          <Styled.SubmitButton
            variant="outlined"
            color="secondary"
            onClick={() => submitLogin()}
          >
            Submit
          </Styled.SubmitButton>
        </Styled.FormFieldContainer>
      </Styled.FormContainer>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
      <Snackbar
        open={errorStatus.status}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert severity="error" onClose={handleSnackbarClose}>
          {errorStatus.message ? errorStatus.message : 'An unknown error occurred.'}
        </MuiAlert>
      </Snackbar>
    </Styled.Container>
  );
};

export default LoginForm;
