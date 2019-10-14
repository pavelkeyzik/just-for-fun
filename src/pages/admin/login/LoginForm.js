import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function LoginForm() {
  const handleSubmit = event => {
    event.preventDefault();
  };

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

export default LoginForm;
