import { useReducer } from 'react';

interface IState {
  name?: string;
  address?: string;
  lat: number;
  lng: number;
}

interface IAction {
  type: string;
  payload: any;
}

interface IActions {
  SET_NAME: string;
  SET_ADDRESS: string;
  SET_LATITUDE: string;
  SET_LONGITUDE: string;
}

interface IHookType extends IState {
  setName: (name: string) => void;
  setAddress: (address: string) => void;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

export const actions: IActions = {
  SET_NAME: 'SET_NAME',
  SET_ADDRESS: 'SET_ADDRESS',
  SET_LATITUDE: 'SET_LATITUDE',
  SET_LONGITUDE: 'SET_LONGITUDE',
};

/**
 * Inital state for reducer
 */
export const initialState: IState = {
  name: '',
  address: '',
  lat: 0.0,
  lng: 0.0,
};

export function reducer(state: IState, action: IAction): IState {
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
 */
export function useAddPlaceForm(defaultState?: IState): IHookType {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...defaultState,
  });

  /**
   * Function that dispatch action to change place name
   *
   * @param {strign} value - New value of place name
   */
  function setName(value: string): void {
    dispatch({ type: actions.SET_NAME, payload: value });
  }

  /**
   * Function that dispatch action to change place address
   *
   * @param {strign} value - New value of place address
   */
  function setAddress(value: string): void {
    dispatch({ type: actions.SET_ADDRESS, payload: value });
  }

  /**
   * Function that dispatch action to change place's latitude coordinate
   *
   * @param {strign} value - New value of latitude coordinate
   */
  function setLatitude(value: number): void {
    dispatch({ type: actions.SET_LATITUDE, payload: value });
  }

  /**
   * Function that dispatch action to change place's latitude coordinate
   *
   * @param {strign} value - New value of latitude coordinate
   */
  function setLongitude(value: number): void {
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
