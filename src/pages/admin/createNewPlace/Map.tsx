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
import { ICoordinates } from '../../../types';

interface IMapProps {
  markerCoordinates: ICoordinates;
  onChangeMarkerPosition: (coordinates: ICoordinates) => void;
}

export function Map({ markerCoordinates, onChangeMarkerPosition }: IMapProps) {
  const defaultState: MapboxProps = {
    width: '100%',
    height: 400,
    latitude: 53.8885,
    longitude: 27.545068,
    zoom: 11,
  };
  const [viewport, setViewport] = useState(defaultState);

  function handleViewportChange(updatedViewport: ViewportProps) {
    setViewport(updatedViewport);
  }

  function handleChangeMarkerPosition(updatedPosition: DragEvent) {
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
