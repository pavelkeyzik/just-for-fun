import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes } from '../config';

import { PageLoader } from '../components/PageLoader';

const Login = React.lazy(() => import('./admin/Login'));
const Dashboard = React.lazy(() => import('./admin/Dashboard'));

function Admin() {
  const isAuthorized = localStorage.getItem('isAuthorized');

  return (
    <Suspense fallback={<PageLoader message="Admin panel is loading..." />}>
      {!isAuthorized && <Redirect to={routes.admin.login} />}
      <Switch>
        <Route exact path={routes.admin.login} component={Login} />
        <Route path={routes.admin.home} component={Dashboard} />
      </Switch>
    </Suspense>
  );
}

export default Admin;
