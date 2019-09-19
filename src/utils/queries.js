import gql from 'graphql-tag';

export const GET_STAFFS = gql`
  query GetSiteStatistics {
    places {
      title
      address
      lat
      lng
    }
  }
`;
