import { BaseAction, Concat } from './index';
import {
  DELETE_VENDOR,
  GET_VENDOR_LIST,
  GET_ONE_VENDOR,
  POST_NEW_VENDOR,
  PUT_VENDOR,
  SUCCESS,
  FAIL,
} from '../actionTypes';
import { City, Country } from '@Types/definition.types';
import { TSelectValue } from '@Types/application.types';

export type Vendor = {
  partnerId: number;
  partnerCode: string;
  name: string;
  cityId: number;
  countryId: number;
  address: string;
  taxNumber: string;
  taxOffice: string;
  email: string;
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
  isInsurancePartner: any;
  isSupplierPartner: any;
  //TODO: как узнаем тип массива изменить any
  contracts: any[];
  nonCurrAssetsInsurancePartner: any[];
  nonCurrAssetsPartner: any[];
};

export type TCreateVendor = {
  partnerCode: string;
  name: string;
  phone: string;
  address: string;
  email?: string;
  cityId?: number;
  taxNumber?: string;
  taxOffice?: string;
  secondPhone?: string;
  description?: string;
  countryId?: number;
};
export type TFormCreateVendor = Omit<TCreateVendor, 'countryId' | 'cityId'> & {
  countryId: TSelectValue<number>;
  cityId: TSelectValue<number>;
};

export type TUpdateVendor = TCreateVendor & Pick<Vendor, 'partnerId'>;

export interface VendorState {
  vendorList: Vendor[] | [];
  currentVendor: Vendor | null;
  loadingVendor: boolean;
}

export interface GetVendorList extends BaseAction<typeof GET_VENDOR_LIST> {}
export interface GetVendorListSuccess
  extends BaseAction<Concat<typeof GET_VENDOR_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Vendor[];
  };
}

export interface GetOneVendor extends BaseAction<typeof GET_ONE_VENDOR> {}
export interface GetOneVendorSuccess
  extends BaseAction<Concat<typeof GET_ONE_VENDOR, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Vendor;
  };
}

export interface PostNewVendor extends BaseAction<typeof POST_NEW_VENDOR> {}
export interface PostNewVendorSuccess
  extends BaseAction<Concat<typeof POST_NEW_VENDOR, typeof SUCCESS>> {
  response: {
    resultObject: Vendor;
  };
}
export interface PostNewVendorFail
  extends BaseAction<Concat<typeof POST_NEW_VENDOR, typeof FAIL>> {}

export interface UpdateVendor extends BaseAction<typeof PUT_VENDOR> {}
export interface UpdateVendorSuccess
  extends BaseAction<Concat<typeof PUT_VENDOR, typeof SUCCESS>> {
  response: {
    resultObject: Vendor;
  };
}

export interface DeleteVendor extends BaseAction<typeof DELETE_VENDOR> {}
export interface DeleteVendorSuccess
  extends BaseAction<Concat<typeof DELETE_VENDOR, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    languageKeyword: string;
    resultObject: [];
  };
}

export type VendorActions =
  | GetVendorList
  | GetVendorListSuccess
  | GetOneVendor
  | GetOneVendorSuccess
  | PostNewVendor
  | PostNewVendorSuccess
  | PostNewVendorFail
  | UpdateVendor
  | UpdateVendorSuccess
  | DeleteVendor
  | DeleteVendorSuccess;
