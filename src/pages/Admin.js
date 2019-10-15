import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { routes } from '../config';

import { PageLoader } from '../components/PageLoader';

const Login = React.lazy(() => import('./admin/Login'));
const Dashboard = React.lazy(() => import('./admin/Dashboard'));

function Admin() {
  return (
    <Suspense fallback={<PageLoader message="Suspense work" />}>
      <Route exact path={routes.admin} component={Login} />
      <Route exact path={routes.dashboard} component={Dashboard} />
    </Suspense>
  );
}

export default Admin;
