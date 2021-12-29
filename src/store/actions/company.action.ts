import { CompanyActions } from '../types/company.types';
import { GET_COMPANY_LIST } from '../actionTypes';

export const GetCompanyList = (): CompanyActions => ({
  type: GET_COMPANY_LIST,
  api: {
    url: '/Firm/GetCompaniesList',
    method: 'GET',
  },
});