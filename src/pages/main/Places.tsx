import React from 'react';
import { Container } from 'reactstrap';

import { PlacesGrid } from './places/PlacesGrid';

import './Places.css';

function Places(): JSX.Element {
  return (
    <Container>
      <main className="Places__main">
        <h2 className="Places__section-title">Places</h2>
        <PlacesGrid />
      </main>
    </Container>
  );
}

export default Places;
