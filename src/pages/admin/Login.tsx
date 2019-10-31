import React from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

import LoginForm from './login/LoginForm';

import styles from './Login.module.css';

function Login(): JSX.Element {
  return (
    <Container>
      <Row className={styles.row}>
        <Col lg="7">
          <Card body inverse className={styles.card}>
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
