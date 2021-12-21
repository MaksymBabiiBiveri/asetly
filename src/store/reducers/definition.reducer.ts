import { concatActions } from '@helpers/functions';
import { GET_CITIES_LIST, SUCCESS } from '../actionTypes';
import { DefinitionActions, DefinitionState } from '../types/definition.types';

const initialState: DefinitionState = {
  citiesList: [],
};

export const DefinitionReducer = (
  state = initialState,
  action: DefinitionActions
): DefinitionState => {
  switch (action.type) {
    case concatActions(GET_CITIES_LIST, SUCCESS):
      return {
        ...state,
        citiesList: action.response.resultObject,
      };
    default:
      return {
        ...state,
      };
  }
};
