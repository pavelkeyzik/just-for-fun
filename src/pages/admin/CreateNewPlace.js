import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Input } from '../../components/Input';
import { Map } from './createNewPlace/Map';
import { Button } from './components/Button';

import { useAddPlaceForm } from '../../hooks/add-place-form';

import './CreateNewPlace.css';

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
  const [createNewPlace] = useMutation(CREATE_NEW_PLACE);
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
    lat: 53.888019427799776,
    lng: 27.544588765497792,
  });

  function handleAddNewPlace(event) {
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

  function handleChangePlaceName(event) {
    const value = event.currentTarget.value;
    setName(value);
  }

  function handleChangePlaceAddress(event) {
    const value = event.currentTarget.value;
    setAddress(value);
  }

  function handleChangeMarkerPosition(coordinates) {
    setLatitude(coordinates.latitude);
    setLongitude(coordinates.longitude);
  }

  return (
    <React.Fragment>
      <div className="Page__short-info">
        <h2>Create new place</h2>
      </div>
      <section className="CreateNewPlace__page-grid">
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
          />
          <label>Place address</label>
          <Input
            value={address}
            onChange={handleChangePlaceAddress}
            type="text"
            placeholder="Enter name of new place"
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
