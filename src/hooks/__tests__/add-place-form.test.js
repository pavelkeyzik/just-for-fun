import { actions, initialState, reducer } from '../add-place-form';

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

  test('check that name can be updated', () => {
    const state = { name: '' };
    const action = { type: actions.SET_NAME, payload: 'New name' };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      name: 'New name',
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that address can be updated', () => {
    const state = { address: '' };
    const action = { type: actions.SET_ADDRESS, payload: 'New address' };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      address: 'New address',
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that latitude can be updated', () => {
    const state = { lat: '' };
    const action = { type: actions.SET_LATITUDE, payload: 5.5 };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      lat: 5.5,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that longitude can be updated', () => {
    const state = { lng: '' };
    const action = { type: actions.SET_LONGITUDE, payload: 5.5 };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      lng: 5.5,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });
});
