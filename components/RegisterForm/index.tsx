import React, { FunctionComponent, useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';
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
import { AccountCircle, VpnKey, Email } from '@material-ui/icons';
import { Styled } from './_styles';
import CTAButton from '../ui/CTAButton/index';
import { Heading } from '../ui/Typography/index';
import {
  CustomerCreateQuery,
  CustomerCreateRequest,
  CustomerCreateResponse,
  CustomerLoginQuery,
  CustomerLoginRequest,
  CustomerLoginResponse,
  ErrorStatus,
} from './_types';

/*
* LoginForm - component that controls the process of logging in/handling
* login failures on the /login page.
* */
const RegisterForm: FunctionComponent = () => {
  // State variable definitions
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fieldUpdated, setFieldUpdated] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = useState<string>('Submitting registration...');
  // Login error response state
  const [errorStatus, setErrorStatus] = useState<ErrorStatus>({
    status: false,
  });
  // Login mutation variables
  const [variables, setVariables] = useState<CustomerCreateRequest>({
    firstName,
    lastName,
    email,
    password,
  });
  const [loginVariables, setLoginVariables] = useState<CustomerLoginRequest>({
    email,
    password,
  });

  /*
  * GraphQL Requests:
  * submitRegisterRequest - mutation that attempts to create a customer account
  *   - Request interface:  CustomerCreateRequest
  *   - Response interface: CustomerCreateResponse
  * submitLoginRequest - mutation that attempts to create a customerAccessToken
  *   - Request interface:  CustomerLoginRequest
  *   - Response interface: CustomerLoginResponse
  * */
  const [submitRegisterRequest, { data: submitRegisterData }] = useMutation<CustomerCreateResponse>(
    CustomerCreateQuery,
    {
      variables: {
        input: variables,
      },
    },
  );
  const [submitLoginRequest, { data: submitLoginData }] = useMutation<CustomerLoginResponse>(
    CustomerLoginQuery,
    {
      variables: {
        input: loginVariables,
      },
    },
  );

  // onClose event for error Snackbar component
  const handleSnackbarClose = () => {
    setErrorStatus({ ...errorStatus, status: false });
  };

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
    setVariables({
      ...variables,
      firstName: event.target.value,
    });
  };

  const updateLastName = (event) => {
    setLastName(event.target.value);
    setVariables({
      ...variables,
      lastName: event.target.value,
    });
  };

  // onChange event for email TextField
  const updateEmail = (event) => {
    setEmail(event.target.value);
    setVariables({
      ...variables,
      email: event.target.value,
    });
    setLoginVariables({
      ...loginVariables,
      email: event.target.value,
    });
  };

  // onChange event for password TextField
  const updatePassword = (event) => {
    setPassword(event.target.value);
    setVariables({
      ...variables,
      password: event.target.value,
    });
    setLoginVariables({
      ...loginVariables,
      password: event.target.value,
    });
    setFieldUpdated(true);
  };

  const validateInput = () => (
    (validator.isEmail(email) && email !== '')
    && password !== ''
    && firstName !== ''
    && lastName !== ''
  );

  // Attempt customer login
  const submitRegister = () => {
    if (validateInput()) {
      setDialogOpen(true);
      submitRegisterRequest()
        .then((res) => {
          console.log(res);
          setDialogOpen(false);
          // Check if access token was returned from API
          if (res.data.customerCreate.customer.id) {
            // Register successful, then attempt login
            setDialogMessage('Success. Loggin in...');
            submitLoginRequest()
              .then((loginRes) => {
                console.log(loginRes);
                // If customerAccessToken exists (login succeeded)...
                if (loginRes.data.customerAccessTokenCreate.customerAccessToken) {
                  window.localStorage.setItem(
                    'customerAccessToken',
                    loginRes.data.customerAccessTokenCreate.customerAccessToken.accessToken,
                  );
                  // Redirect to homepage
                  Router.push('/')
                    .catch((error) => console.log(error));
                } else {
                  // If access token is null, there was an error - set error status
                  setErrorStatus({
                    status: true,
                    code: loginRes.data.customerAccessTokenCreate.customerUserErrors[0].code,
                    message: loginRes.data.customerAccessTokenCreate.customerUserErrors[0].message,
                  });
                }
              }).catch((error) => {
                // This error only occurs due to network events, not a login failure
                setDialogOpen(false);
                console.log(error);
              });
          } else {
            // If customer ID is null, there was an error - set error status
            setErrorStatus({
              status: true,
              code: res.data.customerCreate.userErrors[0].field,
              message: res.data.customerCreate.userErrors[0].message,
            });
          }
        })
        .catch((error) => {
          // This error only occurs due to network events, not a login failure
          setDialogOpen(false);
          console.log(error);
        });
    } else {
      setErrorStatus({
        status: true,
        code: 'INVALID_INPUT',
        message: 'Please correctly fill out all fields.',
      });
    }
  };

  useEffect(() => {
    // If user is already logged in, go to home page
    if (window && window.localStorage.getItem('customerAccessToken')) {
      // Router.push('/')
      //   .catch((error) => console.log(error));
    }
  }, []);

  return (
    <Styled.Container id="register-form">
      <Styled.FormContainer>
        <Heading tag="h1">Register</Heading>
        <Styled.FormFieldContainer>
          <TextField
            id="firstname"
            label="First Name"
            value={firstName}
            onChange={(event) => updateFirstName(event)}
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
            id="lastname"
            label="Last Name"
            value={lastName}
            onChange={(event) => updateLastName(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ width: '2rem' }}>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="email"
            label="Email"
            value={email}
            error={email !== '' && !validator.isEmail(email)}
            onChange={(event) => updateEmail(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ width: '2rem' }}>
                  <Email />
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
            error={fieldUpdated && password === ''}
            onChange={(event) => updatePassword(event)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ width: '2rem' }}>
                  <VpnKey />
                </InputAdornment>
              ),
            }}
          />
          <Styled.FormFieldContainer>
            <CTAButton
              id="form-submit"
              color="secondary"
              text="Submit"
              onClick={() => submitRegister()}
            />
          </Styled.FormFieldContainer>
        </Styled.FormFieldContainer>
        <Styled.LoginLinkText>
          Already have an account? Click
          <Link href="/login">
            {' here '}
          </Link>
          to log in.
        </Styled.LoginLinkText>
      </Styled.FormContainer>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      >
        <DialogContent>
          <Typography variant="h6">{dialogMessage}</Typography>
          <CircularProgress style={{ margin: '1rem auto' }} />
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

export default RegisterForm;
