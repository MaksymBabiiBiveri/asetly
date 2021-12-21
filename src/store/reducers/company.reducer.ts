import { CompanyActions, CompanyState } from '../types/company.types';
import { concatActions } from '@helpers/functions';
import { GET_COMPANY_LIST, SUCCESS } from '../actionTypes';

const initialState: CompanyState = {
  companyList: [],
};

export const CompanyReducer = (
  state = initialState,
  action: CompanyActions
): CompanyState => {
  switch (action.type) {
    case concatActions(GET_COMPANY_LIST, SUCCESS):
      return {
        ...state,
        companyList: action.response.resultObject,
      };
    default:
      return {
        ...state,
      };
  }
};
