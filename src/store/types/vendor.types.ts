import { BaseAction, Concat } from './index';
import { 
  DELETE_VENDOR,
  GET_VENDOR_LIST, 
  GET_ONE_VENDOR,
  POST_NEW_VENDOR,
  PUT_VENDOR, 
  SUCCESS, 
  FAIL 
} from '../actionTypes';
import { City } from '@Types/definition.types';

export type VendorTypes = {
  partnerId: number;
  partnerCode: string;
  name: string;
  cityId: number;
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
  countryId: number;
  isInsurancePartner: any,
  isSupplierPartner:any,
  //TODO: как узнаем тип массива изменить any
  contracts: any[];
  nonCurrAssetsInsurancePartner: any[],
  nonCurrAssetsPartner: any[]
};

export type NewVendorType = {
  partnerCode: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  cityId: number;
  taxNumber: string;
  taxOffice: string;
  secondPhone: string;
  description: string;
  countryId: number;
};

export type PutVendor = NewVendorType & Pick<VendorTypes, 'partnerId'>;

export interface VendorState {
  vendorList: VendorTypes[] | [];
  currentVendor: VendorTypes | null;
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

export interface GetOneVendor extends BaseAction<typeof GET_ONE_VENDOR> {}
export interface GetOneVendorSuccess
  extends BaseAction<Concat<typeof GET_ONE_VENDOR, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: VendorTypes;
  };
}

export interface PostNewVendor extends BaseAction<typeof POST_NEW_VENDOR> {}
export interface PostNewVendorSuccess
  extends BaseAction<Concat<typeof POST_NEW_VENDOR, typeof SUCCESS>> {
  response: {
    resultObject: VendorTypes;
  };
}
export interface PostNewVendorFail
  extends BaseAction<Concat<typeof POST_NEW_VENDOR, typeof FAIL>> {}

export interface UpdateVendor extends BaseAction<typeof PUT_VENDOR> {}
export interface UpdateVendorSuccess
  extends BaseAction<Concat<typeof PUT_VENDOR, typeof SUCCESS>> {
  response: {
    resultObject: VendorTypes;
  };
}

export interface DeleteVendor extends BaseAction<typeof DELETE_VENDOR> {}
export interface DeleteVendorSuccess
  extends BaseAction<Concat<typeof DELETE_VENDOR, typeof SUCCESS>> {}

export type VendorActions =
  | GetVendorList
  | GetVendorListSuccess
  | GetOneVendor
  | GetOneVendorSuccess
  | PostNewVendor
  | PostNewVendorSuccess
  | PostNewVendorFail
  | UpdateVendor
  | UpdateVendorSuccess;
