import { placesData } from './__mocks__/places';

async function mockedData(data, time = 400) {
  return await new Promise(res => {
    setTimeout(() => {
      res(data);
    }, time);
  });
}

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
    places: async () => await mockedData(placesData),
  },
  Mutation: {
    newPlace: async () => await mockedData(placesData[0]),
  },
};
