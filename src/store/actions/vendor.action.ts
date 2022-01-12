import { VendorActions, NewVendorType } from '../types/vendor.types';
import { GET_VENDOR_LIST, POST_NEW_VENDOR } from '../actionTypes';

export const GetVendorList = (): VendorActions => ({
  type: GET_VENDOR_LIST,
  api: {
    url: '/Vendor/GetVendorList',
    method: 'GET',
  },
});

export const postNewVendor = (
  newVendor: NewVendorType,
  path: string
): VendorActions => ({
  type: POST_NEW_VENDOR,

  api: {
    url: '',
    method: 'POST',
    data: {
      ...newVendor,
    },
  },
  redirect: {
    path: path,
  }
});