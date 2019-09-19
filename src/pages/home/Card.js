import React from 'react';

export function Card({ title, address, lat, lng }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid',
        padding: 20,
      }}
    >
      <b>{title}</b>
      <i>{address}</i>
      <b style={{ marginTop: 10 }}>
        Coordinates: {lat}, {lng}
      </b>
    </div>
  );
}
