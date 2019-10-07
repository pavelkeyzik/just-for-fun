import { actions, initialState } from '../add-place-form';

describe('useAddPlaceForm hook', () => {
  test('check actions', () => {
    const objectToCheck = {
      SET_NAME: 'SET_NAME',
      SET_ADDRESS: 'SET_ADDRESS',
      SET_LATITUDE: 'SET_LATITUDE',
      SET_LONGITUDE: 'SET_LONGITUDE',
    };

    expect(actions).toEqual(objectToCheck);
  });

  test('check initial state for state', () => {
    const objectToCheck = {
      name: '',
      address: '',
      lat: 0.0,
      lng: 0.0,
    };

    expect(initialState).toEqual(objectToCheck);
  });
});
