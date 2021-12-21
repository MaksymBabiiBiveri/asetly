import {
  ApplicationActions,
  ApplicationState,
} from '../types/application.types';
import { FAIL, GET_TOKEN, SUCCESS } from '../actionTypes';
import { concatActions } from '@helpers/functions';

const initialState: ApplicationState = {
  token: '',
  error: null,
};

export const ApplicationReducer = (
  state = initialState,
  action: ApplicationActions
): ApplicationState => {
  switch (action.type) {
    case concatActions(GET_TOKEN, SUCCESS):
      localStorage.setItem('token', action.response.token);
      return {
        ...state,
        token: action.response.token,
      };
    case concatActions(GET_TOKEN, FAIL):
      return {
        ...state,
        error: action.error.message,
      };
    default:
      return {
        ...state,
      };
  }
};
