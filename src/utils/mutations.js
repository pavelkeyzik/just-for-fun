import gql from 'graphql-tag';

export const ADD_PLACE = gql`
  mutation AddNewPlace(
    $title: String!
    $address: String!
    $lat: Float!
    $lng: Float!
  ) {
    newPlace(
      input: { title: $title, address: $address, lat: $lat, lng: $lng }
    ) {
      title
      address
      lat
      lng
    }
  }
`;
