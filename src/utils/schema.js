import { placesData } from './__mocks__/places';

export const schema = `
  type Place {
    _id: ID!
    title: String!
    address: String!
    lat: Float!
    lng: Float!
  }

  input PlaceInput {
    title: String!
    address: String!
    lat: Float!
    lng: Float!
  }

  type Query {
    places: [Place]!
  }

  type Mutation {
    newPlace(input: PlaceInput!): Place!
  }
`;

export const resolvers = {
  Query: {
    places: () => placesData,
  },
  Mutation: {
    newPlace: () => placesData[0],
  },
};
