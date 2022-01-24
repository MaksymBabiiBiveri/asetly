import { BaseAction, Concat } from './index';
import {
  DELETE_COMPANY,
  FAIL,
  GET_COMPANY_LIST,
  GET_ONE_COMPANY,
  POST_NEW_COMPANY,
  PUT_COMPANY,
  SUCCESS,
} from '../actionTypes';
import { City, Country } from '@Types/definition.types';
import { TSelectValue } from '@Types/application.types';

export type Company = {
  companyId: number;
  companyCode: string;
  name: string;
  cityId: number;
  address: string;
  taxNumber: string;
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
  country: Country;
  //TODO: как узнаем тип массива изменить any
  logo: any;
  contracts: any[];
  companyMenus: any[];
  userAuthorizedCompanies: any[];
};

export type TCreateCompany = {
  companyCode: string;
  name: string;
  address: string;
  phone: string;
  cityId: number;
  countryId: number;
  contactName: string;
  taxNumber: string;
  taxOffice?: string;
};
export type TFormCreateCompany = Omit<
  TCreateCompany,
  'countryId' | 'cityId'
> & {
  countryId: TSelectValue<number>;
  cityId: TSelectValue<number>;
};

export type TUpdateCompany = TCreateCompany & Pick<Company, 'companyId'>;

export interface CompanyState {
  companyList: Company[] | [];
  currentCompany: Company | null;
  loadingCompany: boolean;
}

export interface GetCompanyList extends BaseAction<typeof GET_COMPANY_LIST> {}
export interface GetCompanyListSuccess
  extends BaseAction<Concat<typeof GET_COMPANY_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Company[];
  };
}

export interface GetOneCompany extends BaseAction<typeof GET_ONE_COMPANY> {}
export interface GetOneCompanySuccess
  extends BaseAction<Concat<typeof GET_ONE_COMPANY, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Company;
  };
}

export interface PostNewCompany extends BaseAction<typeof POST_NEW_COMPANY> {}
export interface PostNewCompanySuccess
  extends BaseAction<Concat<typeof POST_NEW_COMPANY, typeof SUCCESS>> {
  response: {
    resultObject: Company;
  };
}
export interface PostNewCompanyFail
  extends BaseAction<Concat<typeof POST_NEW_COMPANY, typeof FAIL>> {}

export interface UpdateCompany extends BaseAction<typeof PUT_COMPANY> {}
export interface UpdateCompanySuccess
  extends BaseAction<Concat<typeof PUT_COMPANY, typeof SUCCESS>> {
  response: {
    resultObject: Company;
  };
}

export interface DeleteCompany extends BaseAction<typeof DELETE_COMPANY> {}
export interface DeleteCompanySuccess
  extends BaseAction<Concat<typeof DELETE_COMPANY, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    languageKeyword: string;
    resultObject: [];
  };
}

export type CompanyActions =
  | GetCompanyList
  | GetCompanyListSuccess
  | GetOneCompany
  | GetOneCompanySuccess
  | PostNewCompany
  | PostNewCompanySuccess
  | PostNewCompanyFail
  | UpdateCompany
  | UpdateCompanySuccess
  | DeleteCompany
  | DeleteCompanySuccess;
