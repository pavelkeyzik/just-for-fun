import gql from 'graphql-tag';

export const GET_PLACES = gql`
  query GetPlaces {
    places {
      title
      address
      lat
      lng
    }
  }
`;
