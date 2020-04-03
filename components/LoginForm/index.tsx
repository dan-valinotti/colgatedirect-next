import React, { FunctionComponent, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { Styled } from './_styles';
import {
  CustomerLoginQuery, CustomerLoginRequest, CustomerLoginResponse,
} from './_types';

const LoginForm: FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [variables, setVariables] = useState<CustomerLoginRequest>({
    email,
    password,
  });

  console.log(email, password, variables);

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
  };

  const submitLogin = () => {
    submitLoginRequest()
      .then((res) => console.log(res))
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
            error={email === ''}
            onChange={(event) => updateEmail(event)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            error={password === ''}
            onChange={(event) => updatePassword(event)}
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
    </Styled.Container>
  );
};

export default LoginForm;
