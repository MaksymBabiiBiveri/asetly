import { VendorActions, NewVendorTypes } from '../types/vendor.types';
import { GET_VENDOR_LIST, POST_NEW_VENDOR } from '../actionTypes';

export const GetVendorList = (): VendorActions => ({
  type: GET_VENDOR_LIST,
  api: {
    url: '/Vendor/GetVendorList',
    method: 'GET',
  },
});

export const postNewVendor = (
  newVendor: NewVendorTypes
): VendorActions => ({
  type: POST_NEW_VENDOR,
  api: {
    url: '',
    method: 'POST',
    data: {
      ...newVendor,
    },
  },
});