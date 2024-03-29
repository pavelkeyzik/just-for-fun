import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Input } from '../../components/Input';
import { Map } from './createNewPlace/Map';
import { Button } from './components/Button';

import { useAddPlaceForm } from '../../hooks/add-place-form';
import { defaultMarkerLat, defaultMarkerLng } from '../../config';

import styles from './CreateNewPlace.module.css';
import { AddNewPlaceSpinner } from './createNewPlace/AddNewPlaceSpinner';
import { ICoordinates, IPlace } from '../../types';
import { UncontrolledAlert } from 'reactstrap';
import { GET_PLACES, IPlacesData } from './Places';

interface INewPlaceData {
  createPlace: IPlace;
}

export const CREATE_NEW_PLACE = gql`
  mutation AddNewPlace(
    $title: String!
    $address: String!
    $lat: Float!
    $lng: Float!
  ) {
    createPlace(title: $title, address: $address, lat: $lat, lng: $lng) {
      title
      address
      lat
      lng
    }
  }
`;

function CreateNewPlace(): JSX.Element {
  const [createNewPlace, newPlace] = useMutation<
    INewPlaceData,
    IPlace
  >(CREATE_NEW_PLACE, {
    update(cache, { data }) {
      const queryData = cache.readQuery<IPlacesData>({ query: GET_PLACES });
      const createdPlace = data && data.createPlace;
      const places = queryData && queryData.places

      if (createdPlace && places) {
        cache.writeQuery({
          query: GET_PLACES,
          data: {
            places: [...places, createdPlace],
          }
        })
      }
    }
  });

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

  function handleAddNewPlace(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    createNewPlace({
      variables: {
        title: name,
        address,
        lat,
        lng,
      },
    });
  }

  function handleChangePlaceName(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    const value = event.currentTarget.value;
    setName(value);
  }

  function handleChangePlaceAddress(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    const value = event.currentTarget && event.currentTarget.value;
    setAddress(value);
  }

  function handleChangeMarkerPosition(coordinates: ICoordinates): void {
    setLatitude(coordinates.latitude);
    setLongitude(coordinates.longitude);
  }

  return (
    <React.Fragment>
      <div>
        <h2>Create new place</h2>
      </div>
      <section className={styles.pageGrid}>
        {newPlace.loading && (
          <AddNewPlaceSpinner message="Adding a new place to the database..." />
        )}
        <form className={styles.formGrid} onSubmit={handleAddNewPlace}>
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
          {newPlace.error && (
            <UncontrolledAlert color="danger">
              {newPlace.error.message}
            </UncontrolledAlert>
          )}
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
