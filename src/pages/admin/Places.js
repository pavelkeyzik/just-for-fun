import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Button } from './components/Button';

import './Places.css';
import { PageLoader } from '../../components/PageLoader';

export const GET_PLACES = gql`
  query {
    places {
      title
      address
    }
  }
`;

export function Places() {
  const { data, loading } = useQuery(GET_PLACES);

  if (loading) {
    return <PageLoader message="Places is loading" />;
  }

  console.log({ data });

  return (
    <React.Fragment>
      <div className="Page__short-info">
        <h2>Places</h2>
        <Button>Create new place</Button>
      </div>
      <section className="Admin__places-grid">
        {data.places.map((place, index) => (
          <article key={index} className="Admin__place-card">
            <h3 className="Admin__place-card-title">{place.title}</h3>
            <span>{place.address}</span>
          </article>
        ))}
      </section>
    </React.Fragment>
  );
}
