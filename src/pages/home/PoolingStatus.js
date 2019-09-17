import React from 'react';

export function PoolingStatus({ isPooling }) {
  return (
    <div style={{ padding: 20 }}>
      <span role="img" aria-label="pooling enabled" style={{ marginRight: 10 }}>
        {isPooling ? '🕒' : '🙄'}
      </span>
      <b style={{ color: isPooling && '#228b22' }}>
        {isPooling ? 'Pooling enabled' : 'Pooling disabled'}
      </b>
    </div>
  );
}
