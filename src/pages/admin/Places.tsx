import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { routes } from '../../config';

import './Places.css';
import { PageLoader } from '../../components/PageLoader';
import { IPlace } from '../../types';

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

  return (
    <React.Fragment>
      <div className="Page__short-info">
        <h2>Places</h2>
        <Link to={routes.admin.createNewPlace}>Create new place</Link>
      </div>
      <section className="Admin__places-grid">
        {data.places.map((place: IPlace, index: number) => (
          <article key={index} className="Admin__place-card">
            <h3 className="Admin__place-card-title">{place.title}</h3>
            <span>{place.address}</span>
          </article>
        ))}
      </section>
    </React.Fragment>
  );
}
