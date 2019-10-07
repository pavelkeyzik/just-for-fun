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
    const newValue = 'New name';
    const action = { type: actions.SET_NAME, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      name: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that address can be updated', () => {
    const state = { address: '' };
    const newValue = 'New address';
    const action = { type: actions.SET_ADDRESS, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      address: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that latitude can be updated', () => {
    const state = { lat: '' };
    const newValue = 5.5;
    const action = { type: actions.SET_LATITUDE, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      lat: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that longitude can be updated', () => {
    const state = { lng: '' };
    const newValue = 5.5;
    const action = { type: actions.SET_LONGITUDE, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      lng: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });
});
