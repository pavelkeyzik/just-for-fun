import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { routes } from './config';
import { client } from './utils/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { PageLoader } from './components/PageLoader';

const Main = React.lazy(() => import('./pages/Main'));
const Admin = React.lazy(() => import('./pages/Admin'));

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
