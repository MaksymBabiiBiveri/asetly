import { CompanyActions, NewCompanyType } from '@Types/company.types';
import { GET_COMPANY_LIST, POST_NEW_COMPANY } from '../actionTypes';

export const GetCompanyList = (): CompanyActions => ({
  type: GET_COMPANY_LIST,
  api: {
    url: '/Firm/GetCompaniesList',
    method: 'GET',
  },
});

export const postNewCompany = (
  newCompany: NewCompanyType,
  path: string
): CompanyActions => ({
  type: POST_NEW_COMPANY,

  api: {
    url: '/Firm/AddFirm',
    method: 'POST',
    data: {
      ...newCompany,
    },
  },
  redirect: {
    path: path,
  },
});
