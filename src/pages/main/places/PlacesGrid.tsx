import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Alert, Row, Col } from 'reactstrap';

import { PlaceCard } from './placesGrid/PlaceCard';
import { PageLoader } from '../../../components/PageLoader';
import { IPlace } from '../../../types';

interface IPlacesData {
  places: IPlace[];
}

export const GET_PLACES = gql`
  query getPlaces {
    places {
      title
      address
      lat
      lng
    }
  }
`;

export function PlacesGrid(): JSX.Element {
  const { data, error, loading } = useQuery<IPlacesData>(GET_PLACES);

  if (error) {
    return <Alert color="danger">{error.message}</Alert>;
  }

  if (loading) {
    return <PageLoader message="Places is loading..." />;
  }

  return (
    <section>
      <Row>
        {data &&
          data.places.map((place: IPlace, index: number) => (
            <Col key={index} sm={{ size: '6' }}>
              <PlaceCard key={index} information={place} />
            </Col>
          ))}
      </Row>
    </section>
  );
}
