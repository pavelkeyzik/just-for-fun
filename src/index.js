import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Container } from 'reactstrap';

import { client } from './utils/api';

import { PageLoader } from './components/PageLoader';
import { NavigationMenu } from './components/NavigationMenu';
import { GradientLine } from './components/GradientLine';
import { Footer } from './components/Footer';

import './setup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Home = React.lazy(() => import('./pages/Home'));
const Places = React.lazy(() => import('./pages/Places'));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <NavigationMenu />
      <GradientLine />
      <Container>
        <Suspense fallback={<PageLoader message="Suspense work" />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/places" component={Places} />
          </Switch>
        </Suspense>
        <Footer />
      </Container>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
