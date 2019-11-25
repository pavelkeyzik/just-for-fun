import { placesData } from './__mocks__/places';
import { IPlace } from '../types';

async function mockedData<T>(data: T, time = 400): Promise<T> {
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
    places: async (): Promise<IPlace[]> => await mockedData(placesData),
  },
  Mutation: {
    newPlace: async (): Promise<IPlace> => await mockedData(placesData[0]),
  },
};
