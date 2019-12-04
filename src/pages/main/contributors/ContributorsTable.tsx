import React from 'react';
import gql from 'graphql-tag';
import { Table, Alert } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';

import styles from './ContributorsTable.module.css';
import { PageLoader } from '../../../components/PageLoader';
import { IContributor } from '../../../types';

const GET_CONTRIBUTORS = gql`
  query GetContributors {
    contributors {
      id
      name
      github
    }
  }
`;

interface IContributorsData {
  contributors: IContributor[];
}

export function ContributorsTable(): JSX.Element {
  const { data, loading, error } = useQuery<IContributorsData>(
    GET_CONTRIBUTORS,
  );

  if (loading) {
    return <PageLoader message="Contributors is loading" />;
  }

  if (error) {
    return <Alert color="danger">{error.message}</Alert>;
  }

  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>GitHub</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.contributors.map(contributor => (
            <tr key={contributor.id}>
              <th scope="row">{contributor.id}</th>
              <td>{contributor.name}</td>
              <td>
                <a href={contributor.github}>{contributor.github}</a>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
