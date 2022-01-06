import { CompanyActions, CompanyState } from '@Types/company.types';
import { concatActions } from '@helpers/functions';
import { GET_COMPANY_LIST, POST_NEW_COMPANY, SUCCESS } from '../actionTypes';

const initialState: CompanyState = {
  companyList: [],
  loadingCompany: false,
};

export const CompanyReducer = (
  state = initialState,
  action: CompanyActions
): CompanyState => {
  switch (action.type) {
    case GET_COMPANY_LIST:
      return {
        ...state,
        loadingCompany: true,
      };
    case concatActions(GET_COMPANY_LIST, SUCCESS):
      return {
        ...state,
        companyList: [...state.companyList, ...action.response.resultObject],
        loadingCompany: false,
      };
    case POST_NEW_COMPANY:
      return {
        ...state,
        loadingCompany: true,
      };
    case concatActions(POST_NEW_COMPANY, SUCCESS):
      return {
        ...state,
        companyList: [...state.companyList, action.response.resultObject],
        loadingCompany: false,
      };
    default:
      return {
        ...state,
      };
  }
};
