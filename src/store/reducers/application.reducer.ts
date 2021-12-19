import { ApplicationActions, ApplicationState } from '../types/application';
import { GET_TOKEN, THROW_ERROR } from '../actionTypes';

const initialState: ApplicationState = {
  token: '',
  error: null,
};

export const ApplicationReducer = (
  state = initialState,
  action: ApplicationActions
): ApplicationState => {
  switch (action.type) {
    case GET_TOKEN:
      localStorage.setItem('token', action.response.token);
      return {
        ...state,
        token: action.response.token,
      };
    case THROW_ERROR:
      return {
        ...state,
        error: action.response,
      };
    default:
      return {
        ...state,
      };
  }
};
