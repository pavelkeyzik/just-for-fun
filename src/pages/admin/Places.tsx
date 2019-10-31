import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { routes } from '../../config';

import styles from './Places.module.css';
import { PageLoader } from '../../components/PageLoader';
import { Place } from '../../types';

interface PlacesData {
  places: Place[];
}

export const GET_PLACES = gql`
  query {
    places {
      title
      address
    }
  }
`;

export function Places(): JSX.Element {
  const { data, loading } = useQuery<PlacesData>(GET_PLACES);

  if (loading) {
    return <PageLoader message="Places is loading" />;
  }

  return (
    <React.Fragment>
      <div className={styles.shortInfo}>
        <h2>Places</h2>
        <Link to={routes.admin.createNewPlace}>Create new place</Link>
      </div>
      <section className={styles.placesGrid}>
        {data &&
          data.places.map((place: Place, index: number) => (
            <article key={index} className={styles.placeCard}>
              <h3 className={styles.placeCardTitle}>{place.title}</h3>
              <span>{place.address}</span>
            </article>
          ))}
      </section>
    </React.Fragment>
  );
}
