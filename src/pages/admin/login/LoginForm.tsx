import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { routes } from '../../../config';

function LoginForm({ history }: RouteComponentProps) {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    localStorage.setItem('isAuthorized', 'true');
    history.push(routes.admin.home);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </FormGroup>
      <Button color="primary">Log In</Button>
    </Form>
  );
}

export default withRouter(LoginForm);
