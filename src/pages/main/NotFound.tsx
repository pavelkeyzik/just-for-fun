import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

import { routes } from '../../config';

import styles from './NotFound.module.css';

function NotFound(): JSX.Element {
  return (
    <Container>
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>404 Page Not Found</h2>
        <p>
          {
            "Sorry! We didn't find anything interesting for you here. Please, click the button below to go home."
          }
        </p>
        <Button tag={Link} to={routes.home} color="primary" outline>
          Go to home page
        </Button>
      </main>
    </Container>
  );
}

export default NotFound;
