import React from 'react';
import { render } from '@testing-library/react';
import { actions, initialState, reducer, useSignInForm } from '../sign-in-form';

interface ITestHookProps {
  callback: () => void;
}

function TestHook({ callback }: ITestHookProps): null {
  callback();
  return null;
}

function testHook(callback: () => void): void {
  render(<TestHook callback={callback} />);
}

describe('useAddPlaceForm hook', () => {
  test('check actions', () => {
    const objectToCheck = {
      SET_USERNAME: 'SET_USERNAME',
      SET_PASSWORD: 'SET_PASSWORD',
    };

    expect(actions).toEqual(objectToCheck);
  });

  test('check initial state for state', () => {
    const objectToCheck = {
      username: '',
      password: '',
    };

    expect(initialState).toEqual(objectToCheck);
  });

  test('check that username can be updated', () => {
    const state = { username: '', password: '' };
    const newValue = 'New username';
    const action = { type: actions.SET_USERNAME, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      username: newValue,
      password: '',
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check that password can be updated', () => {
    const state = { username: '', password: '' };
    const newValue = 'New password';
    const action = { type: actions.SET_PASSWORD, payload: newValue };

    const stateToCheck = reducer(state, action);
    const objectToCheck = {
      username: '',
      password: newValue,
    };

    expect(stateToCheck).toEqual(objectToCheck);
  });

  test('check object that returned from hook by default', () => {
    let stateToCheck = null;
    const objectToCheck = {
      username: '',
      password: '',
    };

    testHook(() => {
      stateToCheck = useSignInForm();
    });

    expect(stateToCheck).toMatchObject(objectToCheck);
  });

  test('check object that returned from initialized by default hook', () => {
    let stateToCheck = null;
    const objectToCheck = {
      username: 'asd',
      password: '12',
    };

    testHook(() => {
      stateToCheck = useSignInForm(objectToCheck);
    });

    expect(stateToCheck).toMatchObject(objectToCheck);
  });

  test('check that if we add the only "name" in hook then other fields completed by default', () => {
    let stateToCheck = null;
    const defaultState = {
      username: 'asd',
      password: '123',
    };
    const objectToCheck = {
      username: 'asd',
      password: '123',
    };

    testHook(() => {
      stateToCheck = useSignInForm(defaultState);
    });

    expect(stateToCheck).toMatchObject(objectToCheck);
  });
});
