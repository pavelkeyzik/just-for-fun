import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { mapBoxAPIAccessToken } from '../../../config';
import { Pin } from '../../../components/Pin';

export function Map({ markerCoordinates, onChangeMarkerPosition }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 400,
    latitude: 53.8885,
    longitude: 27.545068,
    zoom: 11,
  });

  function handleViewportChange(updatedViewport) {
    setViewport(updatedViewport);
  }

  function handleChangeMarkerPosition(updatedPosition) {
    onChangeMarkerPosition({
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
