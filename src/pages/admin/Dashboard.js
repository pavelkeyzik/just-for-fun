import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Header } from './components/Header';

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col sm="4" xl="2">
          Navigation menu
        </Col>
        <Col sm="8" xl="10">
          Content
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
