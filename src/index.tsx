import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { routes } from './config';
import { client } from './client';

import './setup';

import { PageLoader } from './components/PageLoader';
import { registerServiceWorker } from './service-worker';

const Main = React.lazy(() =>
  import(
    /* webpackChunkName: "MainPage" */
    './pages/Main'
  ),
);
const Admin = React.lazy(() =>
  import(
    /* webpackChunkName: "AdminPage" */
    './pages/Admin'
  ),
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Suspense fallback={<PageLoader message="Site is loading..." />}>
        <Switch>
          <Route path={routes.admin.home} component={Admin} />
          <Route path={routes.home} component={Main} />
        </Switch>
      </Suspense>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);

registerServiceWorker();
