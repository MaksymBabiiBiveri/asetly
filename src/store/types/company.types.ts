import { BaseAction, Concat } from './index';
import { GET_COMPANY_LIST, POST_NEW_COMPANY, SUCCESS } from '../actionTypes';
import { City } from '@Types/definition.types';

export type CompanyTypes = {
  companyId: number;
  companyCode: string;
  name: string;
  cityId: number;
  address: string;
  taxNumber: number;
  taxOffice: string;
  contactName: string;
  phone: string;
  secondPhone: string;
  description: string;
  createdDate: string;
  creatorId: number;
  modifiedDate: string;
  modifiedId: number;
  isActive: boolean;
  city: City;
  //TODO: как узнаем тип массива изменить any
  logo: any;
  contracts: any[];
  companyMenus: any[];
  userAuthorizedCompanies: any[];
};

export type NewCompanyTypes = {
  partnerCode: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  cityId: number;
  taxNumber?: string;
  taxOffice?: string;
  secondPhone?: string;
  description?: string;
};

export interface CompanyState {
  companyList: CompanyTypes[] | [];
  loadingCompany: boolean;
}

export interface GetCompanyList extends BaseAction<typeof GET_COMPANY_LIST> {}
export interface GetCompanyListSuccess
  extends BaseAction<Concat<typeof GET_COMPANY_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: CompanyTypes[];
  };
}

export interface PostNewCompany extends BaseAction<typeof POST_NEW_COMPANY> {}
export interface PostNewCompanySuccess
  extends BaseAction<Concat<typeof POST_NEW_COMPANY, typeof SUCCESS>> {
  response: {
    resultObject: CompanyTypes;
  };
}

export type CompanyActions =
  | GetCompanyList
  | GetCompanyListSuccess
  | PostNewCompany
  | PostNewCompanySuccess;
