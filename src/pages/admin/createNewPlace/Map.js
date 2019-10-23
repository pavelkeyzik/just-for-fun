import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapBoxAPIAccessToken } from '../../../config';

export function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: 53.89955,
    longitude: 27.558355,
    zoom: 11,
  });

  function handleViewportChange(updatedViewport) {
    setViewport(updatedViewport);
  }

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapBoxAPIAccessToken}
      onViewportChange={handleViewportChange}
    />
  );
}
