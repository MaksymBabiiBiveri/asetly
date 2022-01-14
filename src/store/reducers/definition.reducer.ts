import { concatActions } from '@helpers/functions';
import { GET_CITIES_LIST, GET_COUNTRIES_LIST, SUCCESS } from '../actionTypes';
import { DefinitionActions, DefinitionState } from '@Types/definition.types';

const initialState: DefinitionState = {
  citiesList: [],
  countriesList: [],
  loadingDefinition: false,
};

export const DefinitionReducer = (
  state = initialState,
  action: DefinitionActions
): DefinitionState => {
  switch (action.type) {
    case GET_COUNTRIES_LIST:
      return {
        ...state,
        loadingDefinition: true,
      };
    case concatActions(GET_COUNTRIES_LIST, SUCCESS):
      return {
        ...state,
        countriesList: action.response.resultObject,
        loadingDefinition: false,
      };
    case GET_CITIES_LIST:
      return {
        ...state,
        loadingDefinition: true,
      };
    case concatActions(GET_CITIES_LIST, SUCCESS):
      return {
        ...state,
        citiesList: action.response.resultObject,
        loadingDefinition: false,
      };
    default:
      return {
        ...state,
      };
  }
};
