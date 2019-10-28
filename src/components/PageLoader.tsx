import React from 'react';
import { Spinner, Container, Row, Col } from 'reactstrap';

import './PageLoader.css';

export interface IPageLoader {
  message: string;
}

export function PageLoader({ message }: IPageLoader) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="PageLoader__spinner-container">
            <Spinner type="grow" color="success" />
            <b>{message}</b>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
