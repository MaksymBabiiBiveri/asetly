import { CompanyActions, NewCompanyTypes } from '@Types/company.types';
import { GET_COMPANY_LIST, POST_NEW_COMPANY } from '../actionTypes';

export const GetCompanyList = (): CompanyActions => ({
  type: GET_COMPANY_LIST,
  api: {
    url: '/Company/GetCompanyList',
    method: 'GET',
  },
});

export const postNewCompany = (
  newCompany: NewCompanyTypes
): CompanyActions => ({
  type: POST_NEW_COMPANY,
  api: {
    url: '/Company/AddCompany',
    method: 'POST',
    data: {
      ...newCompany,
    },
  },
});
