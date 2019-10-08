import { placesData } from './__mocks__/places';

export const schema = `
  type Place {
    _id: ID!
    title: String!
    address: String!
    lat: Float!
    lng: Float!
  }

  type Query {
    places: [Place]!
  }
`;

export const resolvers = {
  Query: {
    places: () => placesData,
  },
};
