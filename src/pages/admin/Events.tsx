import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Alert } from 'reactstrap';
import { IEvent } from '../../types';
import { PageLoader } from '../../components/PageLoader';

interface IEventsData {
  events: IEvent[];
}

const GET_EVENTS = gql`
  query GetEventsInAdminPanel {
    events {
      id
      title
      placeId
      place {
        title
        address
      }
    }
  }
`;

export function Events(): JSX.Element {
  const { data, loading, error } = useQuery<IEventsData>(GET_EVENTS);

  if (loading) {
    return <PageLoader message="Contributors is loading" />;
  }

  if (error) {
    return <Alert color="danger">{error.message}</Alert>;
  }

  return (
    <React.Fragment>
      <h2>Events</h2>
      <ol>
        {data &&
          data.events &&
          data.events.map(event => (
            <li key={event.id}>
              <b>{event.title}</b> [{event.place.title}] ({event.place.address})
            </li>
          ))}
      </ol>
    </React.Fragment>
  );
}
