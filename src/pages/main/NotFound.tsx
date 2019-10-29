import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { routes } from '../../config';

import './NotFound.css';

function NotFound(): JSX.Element {
  return (
    <main className="NotFound__main">
      <h2 className="NotFound__section-title">404 Page Not Found</h2>
      <p>
        {
          "Sorry! We didn't find anything interesting for you here. Please, click the button below to go home."
        }
      </p>
      <Button tag={Link} to={routes.home} color="primary" outline>
        Go to home page
      </Button>
    </main>
  );
}

export default NotFound;
