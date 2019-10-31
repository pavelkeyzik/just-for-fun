import React from 'react';
import { Container } from 'reactstrap';

import { ContributorsTable } from './contributors/ContributorsTable';

import styles from './Contributors.module.css';

function Contributors(): JSX.Element {
  return (
    <Container>
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Contributors</h2>
        <ContributorsTable />
      </main>
    </Container>
  );
}

export default Contributors;
