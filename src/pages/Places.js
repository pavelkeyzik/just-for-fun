import React from 'react';

import { PlacesGrid } from './places/PlacesGrid';

import './Places.css';

function Places() {
  return (
    <main className="Places__main">
      <h2 className="Places__section-title">Places</h2>
      <PlacesGrid />
    </main>
  );
}

export default Places;
