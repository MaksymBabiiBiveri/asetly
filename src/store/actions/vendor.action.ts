import { VendorActions, NewVendorType, PutVendor } from '../types/vendor.types';
import { 
  GET_VENDOR_LIST,
  GET_ONE_VENDOR,
  POST_NEW_VENDOR,
  PUT_VENDOR,
} from '../actionTypes';

export const GetVendorList = (): VendorActions => ({
  type: GET_VENDOR_LIST,
  api: {
    url: '/Vendor/GetVendorList',
    method: 'GET',
  },
});

export const GetOneVendor = (id: string | number): VendorActions => ({
  type: GET_ONE_VENDOR,
  api: {
    url: `/Vendor/GetVendorById/${id}`,
    method: 'GET',
  },
});

export const postNewVendor = (newVendor: NewVendorType):
  VendorActions => ({
  type: POST_NEW_VENDOR,

  api: {
    url: '/Vendor/AddVendor',
    method: 'POST',
    data: {
      ...newVendor,
    },
  },
});

export const updateVendor = (vendor: PutVendor): VendorActions => ({
  type: PUT_VENDOR,
  api: {
    url: '/Vendor/UpdateVendor',
    method: 'PUT',
    data: {
      ...vendor
    }
  },
});