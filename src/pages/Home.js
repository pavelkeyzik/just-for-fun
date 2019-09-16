import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Loader } from '../components/Loader';

import { GET_STAFFS } from '../utils/queries';
import { ErrorMessage } from '../components/ErrorMessage';

export function Home() {
  const { data, loading, error } = useQuery(GET_STAFFS);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <h2>Hello world</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridGap: 20,
        }}
      >
        {data &&
          data.SiteStatistics &&
          data.SiteStatistics.users &&
          data.SiteStatistics.users.edges &&
          data.SiteStatistics.users.edges.map(
            edge =>
              edge &&
              edge.node && (
                <div style={{ border: '2px solid', padding: 20 }}>
                  <div>Date: {edge.node.date}</div>
                  <b>Count: {edge.node.count}</b>
                </div>
              ),
          )}
      </div>
    </div>
  );
}
