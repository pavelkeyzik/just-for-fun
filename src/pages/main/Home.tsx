import React from 'react';
import { Button, Container } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import { Terminal } from './home/Terminal';
import { ReachedGoals } from './home/ReachedGoals';
import { projectName, projectNameAccessible, routes } from '../../config';

import styles from './Home.module.css';

function Home(): JSX.Element {
  return (
    <React.Fragment>
      <Container>
        <Terminal />
        <main className={styles.main}>
          <h2>
            {'Welcome! You are in '}
            <span aria-label={projectNameAccessible}>{projectName}</span>
            {' project!'}
          </h2>
          <p>
            {
              "Now you can click the link below that named as 'View places' to get list of places"
            }
          </p>
          <Button
            tag={Link}
            to={routes.places}
            color="primary"
            outline
            aria-label="View places"
            className={styles.button}
          >
            View places
          </Button>
        </main>
      </Container>
      <ReachedGoals />
    </React.Fragment>
  );
}

export default withRouter(Home);
