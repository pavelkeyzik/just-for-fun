import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { PoolingStatus } from './home/PoolingStatus';

import { GET_STAFFS } from '../utils/queries';
import { Button } from '../components/Button';

const poolingTimeMs = 2000;

export function Home() {
  const { data, loading, error, startPolling, stopPolling } = useQuery(
    GET_STAFFS,
  );
  const [isPoolingEnabled, setIsPoolingEnabled] = useState(false);

  function handleStartPooling() {
    setIsPoolingEnabled(true);
    startPolling(poolingTimeMs);
  }

  function handleStopPooling() {
    setIsPoolingEnabled(false);
    stopPolling();
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      <h2>Hello world</h2>
      <hr />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PoolingStatus isPooling={isPoolingEnabled} />
        <Button onClick={handleStartPooling}>Start pooling</Button>
        <Button onClick={handleStopPooling}>Stop pooling</Button>
        <span style={{ marginLeft: 10 }}>
          (Will make request every {poolingTimeMs}ms)
        </span>
      </div>
      <hr />
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
