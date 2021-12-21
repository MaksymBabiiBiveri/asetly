import { DefinitionActions } from '../types/definition.types';
import { GET_CITIES_LIST } from '../actionTypes';

export const getCitiesList = (): DefinitionActions => ({
  type: GET_CITIES_LIST,
  api: {
    url: '/Definition/GetCitiesList',
    method: 'GET',
  },
});
