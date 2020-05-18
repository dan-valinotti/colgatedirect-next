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
import { AccountCircle, VpnKey } from '@material-ui/icons';
import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';
import CTAButton from 'components/ui/CTAButton';
import { Styled } from './_styles';
import { Heading } from '../ui/Typography/index';
import {
  CustomerLoginRequest,
  ErrorStatus,
  LoginQueryVariables,
  CustomerLoginResponse,
  CUSTOMER_LOGIN_QUERY,
} from '../../common/queries/account';


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

  // GraphQL Requests
  const [submitLoginRequest, { data: submitLoginData }] = useMutation<CustomerLoginResponse>(
    CUSTOMER_LOGIN_QUERY,
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
    // Check if form input values are valid before performing login
    if (validator.isEmail(email) && password !== '') {
      setDialogOpen(true);
      // Sign user login variables with JWT to mask user data in network tab
      const signed = jwt.sign(variables, process.env.JWT_SECRET);

      // Send HTTP POST request to Next.js API endpoint /auth/login
      fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessToken: signed,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          // If login was successful, customerAccessToken will have a value
          if (json.data.customerAccessTokenCreate.customerAccessToken) {
            // Store customerAccessToken in localStorage
            window.localStorage.setItem(
              'customerAccessToken',
              json.data.customerAccessTokenCreate.customerAccessToken.accessToken,
            );

            // Go to homepage
            Router.push('/')
              .catch((error) => console.log(error));
          } else {
            setDialogOpen(false);
            // If access token is null, there was an error - set error status
            setErrorStatus({
              status: true,
              code: json.data.customerAccessTokenCreate.customerUserErrors[0].code,
              message: 'Incorrect email / password.',
            });
          }
        })
        .catch((error) => {
          console.log(error);
          setDialogOpen(false);
          setErrorStatus({
            status: true,
            code: 'UNIDENTIFIED_ERROR',
            message: 'Internal server error.',
          });
        });
    } else {
      setErrorStatus({
        status: true,
        code: 'INVALID_INPUT',
        message: 'Please enter a valid email and password.',
      });
    }
  };

  const submitLoginTemp = () => {
    if (validator.isEmail(email) && password !== '') {
      setDialogOpen(true);
      submitLoginRequest()
        .then((res) => {
          setDialogOpen(false);
          // Check if access token was returned from API
          if (res.data.customerAccessTokenCreate.customerAccessToken) {
            window.localStorage.setItem(
              'customerAccessToken',
              res.data.customerAccessTokenCreate.customerAccessToken.accessToken,
            );
            // Go to homepage
            Router.push('/');
          } else {
            // If access token is null, there was an error - set error status
            setErrorStatus({
              status: true,
              code: res.data.customerAccessTokenCreate.customerUserErrors[0].code,
              message: 'Incorrect email / password.',
            });
          }
        })
        .catch((error) => {
          // This error only occurs due to network events, not a login failure
          setDialogOpen(false);
          setErrorStatus({
            status: true,
            code: 'UNIDENTIFIED_ERROR',
            message: 'Internal server error.',
          });
          console.log(error);
        });
    } else {
      setErrorStatus({
        status: true,
        code: 'INVALID_INPUT',
        message: 'Please enter a valid email and password.',
      });
    }
  };

  // onKeyDown event for TextFields to submit form on pressing 'enter'
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      submitLogin();
    }
  };

  useEffect(() => {
    // If user is already logged in, go to home page
    if (window && window.localStorage.getItem('customerAccessToken')) {
      Router.push('/')
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <Styled.Container id="login-form">
      <Styled.FormContainer>
        <Heading tag="h1">Log In</Heading>
        <Styled.FormFieldContainer>
          <TextField
            id="email"
            label="Email"
            value={email}
            error={email !== '' && !validator.isEmail(email)}
            onChange={(event) => updateEmail(event)}
            onKeyDown={handleKeyPress}
            autoFocus
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
          <Styled.LinkText variant="body1">
            {'Don\'t have an account? '}
            <Link href="/register">
              <a>
                Click here to register.
              </a>
            </Link>
          </Styled.LinkText>
          <Styled.SubmitButtonContainer>
            <CTAButton
              color="secondary"
              onClick={() => submitLoginTemp()}
              id="form-submit"
              text="Submit"
            />
          </Styled.SubmitButtonContainer>
        </Styled.FormFieldContainer>
      </Styled.FormContainer>
      <Dialog
        id="loading-dialog"
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
      <Snackbar
        open={errorStatus.status}
        // autoHideDuration={4000}
        onClose={handleSnackbarClose}
        id="error-snackbar"
      >
        <MuiAlert severity="error" onClose={handleSnackbarClose}>
          {errorStatus.message ? errorStatus.message : 'An unknown error occurred.'}
        </MuiAlert>
      </Snackbar>
    </Styled.Container>
  );
};

export default LoginForm;
