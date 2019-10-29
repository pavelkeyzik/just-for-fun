import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

import LoginForm from './login/LoginForm';

import './Login.css';

function Login(): JSX.Element {
  return (
    <Container>
      <Row className="Login__row">
        <Col lg="7">
          <Card body inverse className="Login__card">
            <CardHeader>
              <h2>Admin Login</h2>
            </CardHeader>
            <CardBody>
              <LoginForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
