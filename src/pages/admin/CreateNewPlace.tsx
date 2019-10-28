import React, { SyntheticEvent } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Input } from '../../components/Input';
import { Map } from './createNewPlace/Map';
import { Button } from './components/Button';

import { useAddPlaceForm } from '../../hooks/add-place-form';
import { defaultMarkerLat, defaultMarkerLng } from '../../config';

import './CreateNewPlace.css';
import { AddNewPlaceSpinner } from './createNewPlace/AddNewPlaceSpinner';
import { ICoordinates } from '../../types';

export const CREATE_NEW_PLACE = gql`
  mutation AddNewPlace(
    $title: String!
    $address: String!
    $lat: Float!
    $lng: Float!
  ) {
    newPlace(
      input: { title: $title, address: $address, lat: $lat, lng: $lng }
    ) {
      title
      address
      lat
      lng
    }
  }
`;

function CreateNewPlace() {
  const [createNewPlace, { loading }] = useMutation(CREATE_NEW_PLACE);
  const {
    name,
    address,
    lat,
    lng,
    setName,
    setAddress,
    setLatitude,
    setLongitude,
  } = useAddPlaceForm({
    lat: defaultMarkerLat,
    lng: defaultMarkerLng,
  });

  function handleAddNewPlace(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createNewPlace({
      variables: {
        title: name,
        address: address,
        lat: lat,
        lng: lng,
      },
    });
  }

  function handleChangePlaceName(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setName(value);
  }

  function handleChangePlaceAddress(
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const value = event.currentTarget && event.currentTarget.value;
    setAddress(value);
  }

  function handleChangeMarkerPosition(coordinates: ICoordinates) {
    setLatitude(coordinates.latitude);
    setLongitude(coordinates.longitude);
  }

  return (
    <React.Fragment>
      <div className="Page__short-info">
        <h2>Create new place</h2>
      </div>
      <section className="CreateNewPlace__page-grid">
        {loading && (
          <AddNewPlaceSpinner message="Adding a new place to the database..." />
        )}
        <form
          className="CreateNewPlace__form-grid"
          onSubmit={handleAddNewPlace}
        >
          <label>Place name</label>
          <Input
            value={name}
            onChange={handleChangePlaceName}
            type="text"
            placeholder="Enter name of new place"
            required
          />
          <label>Place address</label>
          <Input
            value={address}
            onChange={handleChangePlaceAddress}
            type="text"
            placeholder="Enter address of new place"
            required
          />
          <Button type="submit">Save place</Button>
        </form>
        <Map
          markerCoordinates={{ latitude: lat, longitude: lng }}
          onChangeMarkerPosition={handleChangeMarkerPosition}
        />
      </section>
    </React.Fragment>
  );
}

export default CreateNewPlace;
