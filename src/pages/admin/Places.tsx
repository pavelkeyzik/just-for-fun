import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { routes } from '../../config';

import styles from './Places.module.css';
import { PageLoader } from '../../components/PageLoader';
import { IPlace } from '../../types';

export interface IPlacesData {
  places: IPlace[];
}

export const GET_PLACES = gql`
  query GetPlacesInAdminPanel {
    places {
      title
      address
      lat
      lng
    }
  }
`;

export function Places(): JSX.Element {
  const { data, loading } = useQuery<IPlacesData>(GET_PLACES);

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
          data.places.map((place: IPlace, index: number) => (
            <article key={index} className={styles.placeCard}>
              <h3 className={styles.placeCardTitle}>{place.title}</h3>
              <span>{place.address}</span>
            </article>
          ))}
      </section>
    </React.Fragment>
  );
}
