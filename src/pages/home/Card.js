import React from 'react';

export function Card({ date, count }) {
  return (
    <div style={{ border: '2px solid', padding: 20 }}>
      <div>Date: {date}</div>
      <b>Count: {count}</b>
    </div>
  );
}
