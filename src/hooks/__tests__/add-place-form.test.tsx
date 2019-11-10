import React from 'react';
import { render } from '@testing-library/react';
import {
  actions,
  initialState,
  reducer,
  useAddPlaceForm,
} from '../add-place-form';

interface TestHookProps {
  callback: Function;
}

function TestHook({ callback }: TestHookProps): null {
  callback();
  return null;
}

function testHook(callback: Function): void {
  render(<TestHook callback={callback} />);
}

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
    const state = { name: '', lat: 0, lng: 0 };
    const newValue = 'New name';
    const action = { type: actions.SET_NAME, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      name: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that address can be updated', () => {
    const state = { address: '', lat: 0, lng: 0 };
    const newValue = 'New address';
    const action = { type: actions.SET_ADDRESS, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      address: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that latitude can be updated', () => {
    const state = { lat: 0, lng: 0 };
    const newValue = 5.5;
    const action = { type: actions.SET_LATITUDE, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      lat: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that longitude can be updated', () => {
    const state = { lat: 0, lng: 0 };
    const newValue = 5.5;
    const action = { type: actions.SET_LONGITUDE, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      lng: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check object that returned from hook by default', () => {
    let stateToCheck = null;
    const objectToCheck = {
      name: '',
      address: '',
      lat: 0.0,
      lng: 0.0,
    };

    testHook(() => {
      stateToCheck = useAddPlaceForm();
    });

    expect(stateToCheck).toMatchObject(objectToCheck);
  });

  test('check object that returned from initialized by default hook', () => {
    let stateToCheck = null;
    const objectToCheck = {
      name: 'asd',
      address: '12',
      lat: 3,
      lng: 2,
    };

    testHook(() => {
      stateToCheck = useAddPlaceForm(objectToCheck);
    });

    expect(stateToCheck).toMatchObject(objectToCheck);
  });

  test('check that if we add the only "name" in hook then other fields completed by default', () => {
    let stateToCheck = null;
    const defaultState = {
      name: 'asd',
      lat: 0,
      lng: 0,
    };
    const objectToCheck = {
      name: 'asd',
      address: '',
      lat: 0.0,
      lng: 0.0,
    };

    testHook(() => {
      stateToCheck = useAddPlaceForm(defaultState);
    });

    expect(stateToCheck).toMatchObject(objectToCheck);
  });
});
