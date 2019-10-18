import React, { Suspense } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import { Header } from './components/Header';
import { PageLoader } from '../../components/PageLoader';
import { routes } from '../../config';

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
          <Nav>
            <NavItem>
              <NavLink tag={Link} to={routes.admin.home}>
                Dashboard
              </NavLink>
              <NavLink tag={Link} to={routes.admin.places}>
                Places
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col sm="8" xl="10">
          <Suspense fallback={<PageLoader message="SUSPERSNSESSEES" />}>
            <Switch>
              <Route
                exact
                path={routes.admin.home}
                component={() => <div>Dashboard content</div>}
              />
              <Route
                exact
                path={routes.admin.places}
                component={() => <div>Places content</div>}
              />
            </Switch>
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
