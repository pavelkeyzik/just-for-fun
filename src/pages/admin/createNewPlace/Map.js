import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { mapBoxAPIAccessToken } from '../../../config';
import { Pin } from '../../../components/Pin';

export function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: 53.8885,
    longitude: 27.545068,
    zoom: 11,
  });
  const [markerCoordinates, setPinCoordinates] = useState({
    latitude: 53.888019427799776,
    longitude: 27.544588765497792,
  });

  function handleViewportChange(updatedViewport) {
    setViewport(updatedViewport);
  }

  function handleChangeMarkerPosition(updatedPosition) {
    setPinCoordinates({
      latitude: updatedPosition.lngLat[1],
      longitude: updatedPosition.lngLat[0],
    });
  }

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapBoxAPIAccessToken}
      onViewportChange={handleViewportChange}
    >
      <Marker
        {...markerCoordinates}
        onDragEnd={handleChangeMarkerPosition}
        offsetTop={-16}
        offsetLeft={-10}
        draggable
      >
        <Pin />
      </Marker>
    </ReactMapGL>
  );
}
