import React from 'react';
import { Container } from 'reactstrap';

import { ContributorsTable } from './contributors/ContributorsTable';

import './Contributors.css';

function Contributors(): JSX.Element {
  return (
    <Container>
      <main className="Contributors__main">
        <h2 className="Contributors__section-title">Contributors</h2>
        <ContributorsTable />
      </main>
    </Container>
  );
}

export default Contributors;
