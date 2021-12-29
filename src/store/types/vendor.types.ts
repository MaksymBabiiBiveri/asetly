import { BaseAction, Concat } from './index';
import { GET_VENDOR_LIST, SUCCESS } from '../actionTypes';
import { City } from './definition.types';

export type VendorTypes = {
  partnerId: number;
  partnerCode: string;
  name: string;
  email: string;
  isInsurancePartner: null | string;
  isSupplierPartner: null | string;
  cityId: number;
  address: string;
  taxNumber: string;
  taxOffice: string;
  phone: string;
  secondPhone: null | string;
  description: string;
  createdDate: string;
  creatorId: number;
  modifiedDate: null | string;
  modifiedId: null | string;
  isValid: boolean;
  //TODO: как узнаем тип массива изменить any
  contracts: any[];
  nonCurrAssetsPartner: any[];
  nonCurrAssetsInsurancePartner: any[];
  city: City;
};

export interface VendorState {
  vendorList: VendorTypes[] | [];
}

export interface GetVendorList extends BaseAction<typeof GET_VENDOR_LIST> {}
export interface GetVendorListSuccess
  extends BaseAction<Concat<typeof GET_VENDOR_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: VendorTypes[];
  };
}

export type VendorActions = GetVendorList | GetVendorListSuccess;
