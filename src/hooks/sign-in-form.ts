import { useReducer } from 'react';

interface IState {
  username: string;
  password: string;
}

interface IAction {
  type: string;
  payload: any;
}

interface IActions {
  SET_USERNAME: string;
  SET_PASSWORD: string;
}

interface IHookType extends IState {
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

export const actions: IActions = {
  SET_USERNAME: 'SET_USERNAME',
  SET_PASSWORD: 'SET_PASSWORD',
};

/**
 * Inital state for reducer
 */
export const initialState: IState = {
  username: '',
  password: '',
};

export function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case actions.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case actions.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
}

/**
 * Hook for `Sign In` form
 */
export function useSignInForm(defaultState?: IState): IHookType {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...defaultState,
  });

  /**
   * Function that dispatch action to change username
   *
   * @param {strign} value - New value of username
   */
  function setUsername(value: string): void {
    dispatch({ type: actions.SET_USERNAME, payload: value });
  }

  /**
   * Function that dispatch action to change password
   *
   * @param {strign} value - New value of password
   */
  function setPassword(value: string): void {
    dispatch({ type: actions.SET_PASSWORD, payload: value });
  }

  return {
    username: state.username,
    password: state.password,
    setUsername,
    setPassword,
  };
}
