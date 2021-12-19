import { AxiosRequestConfig } from 'axios';

export type Api<Data = undefined> = {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  data?: Data;
  params?: {};
};

export type Redirect = {
  history: any;
  path: string;
};

export interface BaseAction<Type> {
  type: Type;
  api?: AxiosRequestConfig;
  apiKey?: true | string;
  redirect?: Redirect;
}
