import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Alert, Row, Col } from 'reactstrap';

import { PlaceCard } from './placesGrid/PlaceCard.js';
import { PageLoader } from '../../components/PageLoader';

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

export function PlacesGrid({ places }) {
  const { data, error, loading } = useQuery(GET_PLACES);

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
          data.places &&
          data.places.map((place, index) => (
            <Col sm={{ size: 'auto' }}>
              <PlaceCard key={index} information={place} />
            </Col>
          ))}
      </Row>
    </section>
  );
}
