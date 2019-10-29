import React, { useState } from 'react';
import ReactMapGL, {
  Marker,
  ViewportProps,
  MapboxProps,
  DragEvent,
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { mapBoxAPIAccessToken } from '../../../config';
import { Pin } from '../../../components/Pin';
import { Coordinates } from '../../../types';

interface MapProps {
  markerCoordinates: Coordinates;
  onChangeMarkerPosition: (coordinates: Coordinates) => void;
}

export function Map({
  markerCoordinates,
  onChangeMarkerPosition,
}: MapProps): JSX.Element {
  const defaultState: MapboxProps = {
    width: '100%',
    height: 400,
    latitude: 53.8885,
    longitude: 27.545068,
    zoom: 11,
  };
  const [viewport, setViewport] = useState(defaultState);

  function handleViewportChange(updatedViewport: ViewportProps): void {
    setViewport(updatedViewport);
  }

  function handleChangeMarkerPosition(updatedPosition: DragEvent): void {
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
