import { BaseAction, Concat } from './index';
import { GET_VENDOR_LIST, POST_NEW_VENDOR, SUCCESS } from '../actionTypes';
import { City } from './definition.types';

export type VendorTypes = {
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

export type NewVendorTypes = {
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

export interface VendorState {
  vendorList: VendorTypes[] | [];
  loadingVendor: boolean;
}

export interface GetVendorList extends BaseAction<typeof GET_VENDOR_LIST> {}
export interface GetVendorListSuccess
  extends BaseAction<Concat<typeof GET_VENDOR_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: VendorTypes[];
  };
}

export interface PostNewVendor extends BaseAction<typeof POST_NEW_VENDOR> {}
export interface PostNewVendorSuccess
  extends BaseAction<Concat<typeof POST_NEW_VENDOR, typeof SUCCESS>> {
  response: {
    resultObject: VendorTypes;
  };
}

export type VendorActions =
  | GetVendorList
  | GetVendorListSuccess
  | PostNewVendor
  | PostNewVendorSuccess;
