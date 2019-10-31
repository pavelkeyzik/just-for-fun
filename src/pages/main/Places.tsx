import React from 'react';
import { Container } from 'reactstrap';

import { PlacesGrid } from './places/PlacesGrid';

import styles from './Places.module.css';

function Places(): JSX.Element {
  return (
    <Container>
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Places</h2>
        <PlacesGrid />
      </main>
    </Container>
  );
}

export default Places;
