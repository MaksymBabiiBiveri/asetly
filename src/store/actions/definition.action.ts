import { DefinitionActions } from '@Types/definition.types';
import { GET_CITIES_LIST, GET_COUNTRIES_LIST } from '../actionTypes';

export const getCitiesList = (): DefinitionActions => ({
  type: GET_CITIES_LIST,
  api: {
    url: '/Definition/GetCitiesList',
    method: 'GET',
  },
});

export const getCountriesList = (): DefinitionActions => ({
  type: GET_COUNTRIES_LIST,
  api: {
    url: '/Definition/GetCountriesList',
    method: 'GET',
  },
});
