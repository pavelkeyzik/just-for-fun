import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { routes } from '../../../config';

import './Header.css';

export function Header() {
  return (
    <Container fluid className="Header__container">
      <Row>
        <Col sm="3" xl="2">
          <div className="Header__goto-link">
            <Link to={routes.home}>Go to site</Link>
          </div>
        </Col>
        <Col sm="6" xl="8" className="Header__navigation-container">
          <div>Menu items</div>
        </Col>
        <Col sm="3" xl="2">
          User information
        </Col>
      </Row>
    </Container>
  );
}
