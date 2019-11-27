import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { PageLoader } from '../../components/PageLoader';
import { NavMenu } from './components/NavMenu';
import { SideBar } from './components/SideBar';
import { ActionsPanel } from './components/ActionsPanel';

import styles from './Dashboard.module.css';

import { routes } from '../../config';

import { Places } from './Places';
import CreateNewPlace from './CreateNewPlace';
import { Events } from './Events';

function Dashboard(): JSX.Element {
  return (
    <Container fluid>
      <Row className={styles.container}>
        <Col xl="2" className={styles.column}>
          <NavMenu />
        </Col>
        <Col xl="10" className={styles.column}>
          <ActionsPanel />
          <main className={styles.main}>
            <Suspense fallback={<PageLoader message="Content is loading" />}>
              <Switch>
                <Route
                  exact
                  path={routes.admin.home}
                  component={(): JSX.Element => <div>Dashboard content</div>}
                />
                <Route exact path={routes.admin.places} component={Places} />
                <Route
                  exact
                  path={routes.admin.createNewPlace}
                  component={CreateNewPlace}
                />
                <Route exact path={routes.admin.events} component={Events} />
                <Route
                  component={(): JSX.Element => <div>Nothing found here</div>}
                />
              </Switch>
            </Suspense>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
