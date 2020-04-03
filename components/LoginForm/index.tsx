import React, { FunctionComponent, useState } from 'react';
import validator from 'validator';
import {
  Button, CircularProgress, Dialog, DialogContent, DialogTitle, InputAdornment, TextField, Typography
} from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { AccountCircle, VpnKey } from '@material-ui/icons';
import { Styled } from './_styles';
import {
  CustomerLoginQuery, CustomerLoginRequest, CustomerLoginResponse,
} from './_types';

const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fieldUpdated, setFieldUpdated] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [variables, setVariables] = useState<CustomerLoginRequest>({
    email,
    password,
  });

  console.log(email, validator.isEmail(email));

  const [submitLoginRequest, { data }] = useMutation<CustomerLoginResponse>(
    CustomerLoginQuery,
    {
      variables: {
        input: variables,
      },
    },
  );

  const updateEmail = (event) => {
    setEmail(event.target.value);
    setVariables({ email: event.target.value, password });
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
    setVariables({ email, password: event.target.value });
    setFieldUpdated(true);
  };

  const submitLogin = () => {
    setDialogOpen(true);
    submitLoginRequest()
      .then((res) => {
        setDialogOpen(false);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

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
    </Styled.Container>
  );
};

export default LoginForm;
