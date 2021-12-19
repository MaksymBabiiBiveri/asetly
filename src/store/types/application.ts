import { BaseAction } from './index';
import { GET_TOKEN, THROW_ERROR } from '../actionTypes';

export type ErrorType = {
  [key: string]: string;
};

export interface ApplicationState {
  token: string;
  error: string | null;
}
export interface GetToken extends BaseAction<typeof GET_TOKEN> {
  response: {
    [key: string]: string | null;
    token: string;
  };
}
export interface ThrowError extends BaseAction<typeof THROW_ERROR> {
  response: string;
}

export type ApplicationActions = GetToken | ThrowError;
