import React from 'react';

export function ErrorMessage({ error }) {
  return (
    <div>
      <b style={{ color: '#750404' }}>
        <span role="img" aria-label="sad" style={{ marginRight: 10 }}>
          🥵
        </span>
        {error.message}
      </b>
      <hr />
      <pre style={{ background: '#eee', padding: 10 }}>
        {JSON.stringify(error, null, 2)}
      </pre>
    </div>
  );
}
