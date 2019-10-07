import { useReducer } from 'react';

/**
 * @typedef {Object} AddPlaceForm
 * @property {string} name - Place's name
 * @property {string} address - Place's address
 * @property {number} lat - Place's latitude coordinate
 * @property {number} lng - Place's longitude coordinate
 */

/**
 * @typedef {Object} Action
 * @property {string} type - Type of action
 * @property {*} payload - Any data that you wanna send
 */

export const actions = {
  SET_NAME: 'SET_NAME',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_LATITUDE: 'SET_LATITUDE',
  SET_LONGITUDE: 'SET_LONGITUDE',
};

/**
 * Inital state for reducer
 *
 * @type {AddPlaceForm}
 */
export const initialState = {
  name: '',
  address: '',
  lat: 0.0,
  lng: 0.0,
};

/**
 *
 * @param {AddPlaceForm} state - Current state
 * @param {Action} action - Action to upate state
 *
 * @returns {AddPlaceForm}
 */
function reducer(state, action) {
  switch (action.type) {
    case actions.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actions.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case actions.SET_LATITUDE:
      return {
        ...state,
        lat: action.payload,
      };
    case actions.SET_LONGITUDE:
      return {
        ...state,
        lng: action.payload,
      };
    default:
      return state;
  }
}

/**
 * Hook for `Add new place` form
 *
 * @param {AddPlaceForm} data - Information about place
 */
export function useAddPlaceForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Function that dispatch action to change place name
   *
   * @param {strign} value - New value of place name
   */
  function setName(value) {
    dispatch({ type: actions.SET_NAME, payload: value });
  }

  /**
   * Function that dispatch action to change place address
   *
   * @param {strign} value - New value of place address
   */
  function setAddress(value) {
    dispatch({ type: actions.SET_ADDRESS, payload: value });
  }

  /**
   * Function that dispatch action to change place's latitude coordinate
   *
   * @param {strign} value - New value of latitude coordinate
   */
  function setLatitude(value) {
    dispatch({ type: actions.SET_LATITUDE, payload: value });
  }

  /**
   * Function that dispatch action to change place's latitude coordinate
   *
   * @param {strign} value - New value of latitude coordinate
   */
  function setLongitude(value) {
    dispatch({ type: actions.SET_LONGITUDE, payload: value });
  }

  return {
    name: state.name,
    address: state.address,
    lat: state.lat,
    lng: state.lng,
    setName,
    setAddress,
    setLatitude,
    setLongitude,
  };
}
