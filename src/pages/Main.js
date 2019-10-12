import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import { routes } from '../config';

import { PageLoader } from '../components/PageLoader';
import { NavigationMenu } from '../components/NavigationMenu';
import { GradientLine } from '../components/GradientLine';
import { Footer } from '../components/Footer';

const Home = React.lazy(() => import('./main/Home'));
const Places = React.lazy(() => import('./main/Places'));
const Contributors = React.lazy(() => import('./main/Contributors'));

function Main() {
	return (
		<div>
			<NavigationMenu />
			<GradientLine />
			<Container>
				<Suspense fallback={<PageLoader message="Suspense work" />}>
					<Route exact path={routes.home} component={Home} />
					<Route exact path={routes.places} component={Places} />
					<Route path={routes.contributors} component={Contributors} />
				</Suspense>
			<Footer />
			</Container>
		</div>
	);
}

export default Main;
