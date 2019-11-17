import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../config';

import { PageLoader } from '../components/PageLoader';
import { NavigationMenu } from '../components/NavigationMenu';
import { GradientLine } from '../components/GradientLine';
import { Footer } from '../components/Footer';

const Home = React.lazy(() =>
  import(
    /* webpackChunkName: "Home" */
    './main/Home'
  ),
);
const Places = React.lazy(() =>
  import(
    /* webpackChunkName: "Places" */
    './main/Places'
  ),
);
const Contributors = React.lazy(() =>
  import(
    /* webpackChunkName: "Contributors" */
    './main/Contributors'
  ),
);
const NotFound = React.lazy(() =>
  import(
    /* webpackChunkName: "NotFound" */
    './main/NotFound'
  ),
);

function Main(): JSX.Element {
  return (
    <div>
      <NavigationMenu />
      <GradientLine />
      <Suspense fallback={<PageLoader message="Main page is loading..." />}>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.places} component={Places} />
          <Route exact path={routes.contributors} component={Contributors} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default Main;
