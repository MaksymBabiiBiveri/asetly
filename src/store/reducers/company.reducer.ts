import { CompanyActions, CompanyState } from '@Types/company.types';
import { concatActions } from '@helpers/functions';
import {
  DELETE_COMPANY,
  FAIL,
  GET_COMPANY_LIST,
  GET_ONE_COMPANY,
  POST_NEW_COMPANY,
  PUT_COMPANY,
  SUCCESS,
} from '../actionTypes';

const initialState: CompanyState = {
  companyList: [],
  currentCompany: null,
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
    case GET_ONE_COMPANY:
      return {
        ...state,
        loadingCompany: true,
      };
    case concatActions(GET_ONE_COMPANY, SUCCESS):
      return {
        ...state,
        currentCompany: action.response.resultObject,
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
    case concatActions(POST_NEW_COMPANY, FAIL):
      return {
        ...state,
        loadingCompany: false,
      };
    case PUT_COMPANY:
      return {
        ...state,
        loadingCompany: true,
      };
    case concatActions(PUT_COMPANY, SUCCESS):
      return {
        ...state,
        loadingCompany: false,
      };
    case DELETE_COMPANY:
      return {
        ...state,
      };
    case concatActions(DELETE_COMPANY, SUCCESS):
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
