import gql from 'graphql-tag';

export const GET_STAFFS = gql`
  query GetSiteStatistics {
    SiteStatistics {
      users {
        edges {
          node {
            count
            date
          }
        }
      }
    }
  }
`;
