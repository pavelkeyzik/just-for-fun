import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { PageLoader } from '../../components/PageLoader';
import { NavMenu } from './components/NavMenu';
import { SideBar } from './components/SideBar';
import { ActionsPanel } from './components/ActionsPanel';

import './Dashboard.css';

import { routes } from '../../config';

import { Places } from './Places';
import CreateNewPlace from './CreateNewPlace';

function Dashboard() {
  return (
    <Container fluid>
      <Row className="Dashboard__container">
        <Col xl="2" className="Dashboard__column">
          <NavMenu />
        </Col>
        <Col xl="7" className="Dashboard__column">
          <ActionsPanel />
          <main className="Dashboard__main">
            <Suspense fallback={<PageLoader message="Content is loading" />}>
              <Switch>
                <Route
                  exact
                  path={routes.admin.home}
                  component={() => <div>Dashboard content</div>}
                />
                <Route exact path={routes.admin.places} component={Places} />
                <Route
                  exact
                  path={routes.admin.createNewPlace}
                  component={CreateNewPlace}
                />
                <Route component={() => <div>Nothing found here</div>} />
              </Switch>
            </Suspense>
          </main>
        </Col>
        <Col xl="3" className="Dashboard__column">
          <SideBar />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
