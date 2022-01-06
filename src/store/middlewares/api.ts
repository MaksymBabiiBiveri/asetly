import { Dispatch, Middleware } from 'redux';
import { ActionsTypes } from '../actions';
import { concatActions } from '@helpers/functions';
import { FAIL, SUCCESS } from '../actionTypes';
import { AxiosError, AxiosResponse } from 'axios';
import axios from '../../config/axios';

const api: Middleware = () => (next: Dispatch) => (action: ActionsTypes) => {
  const { type } = action;
  if (!action.api) {
    return next(action);
  }
  next(action);
  return axios
    .request({
      ...action.api,
      params: {
        ...action.api.params,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    })
    .then((response: AxiosResponse) => {
      next({
        ...action,
        type: concatActions(type, SUCCESS),
        response: response.data,
      });
    })
    .catch((error: Error | AxiosError) => {
      next({ ...action, type: concatActions(type, FAIL), error });
    });
};

export default api;
