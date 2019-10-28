import React from 'react';

import { ContributorsTable } from './contributors/ContributorsTable';

import './Contributors.css';

function Contributors() {
  return (
    <main className="Contributors__main">
      <h2 className="Contributors__section-title">Contributors</h2>
      <ContributorsTable />
    </main>
  );
}

export default Contributors;
