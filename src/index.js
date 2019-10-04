import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './utils/api';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { PageLoader } from './components/PageLoader';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Suspense fallback={<PageLoader message="Suspense work" />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
