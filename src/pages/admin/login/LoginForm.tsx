import React, { SyntheticEvent } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routes } from '../../../config';
import { IAuthInformationRequest, ISignInInformation } from '../../../types';
import { useSignInForm } from '../../../hooks/sign-in-form';

export const SIGN_IN = gql`
  mutation signIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      token
    }
  }
`;

interface IAuthInformation {
  signIn: IAuthInformationRequest;
}

function LoginForm({ history }: RouteComponentProps): JSX.Element {
  const [signIn, { loading, error, data }] = useMutation<
    IAuthInformation,
    ISignInInformation
  >(SIGN_IN);
  const { username, password, setUsername, setPassword } = useSignInForm();

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    const response = await signIn({
      variables: {
        username,
        password,
      },
    });

    const token = response.data && response.data.signIn.token;

    if (token) {
      localStorage.setItem('token', token);
      history.push(routes.admin.home);
    }
  }

  function handleChangeUsername(event: SyntheticEvent<HTMLInputElement>) {
    const value = event.currentTarget && event.currentTarget.value;
    setUsername(value);
  }

  function handleChangePassword(event: SyntheticEvent<HTMLInputElement>) {
    const value = event.currentTarget && event.currentTarget.value;
    setPassword(value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username">Username:</Label>
        <Input
          value={username}
          onChange={handleChangeUsername}
          type="text"
          name="username"
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input
          value={password}
          onChange={handleChangePassword}
          type="password"
          name="password"
        />
      </FormGroup>
      <Button color="primary" disabled={loading}>
        {loading ? 'Wait...' : 'Log In'}
      </Button>
    </Form>
  );
}

export default withRouter(LoginForm);
