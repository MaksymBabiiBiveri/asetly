import { VendorActions } from '../types/vendor.types';
import { GET_VENDOR_LIST } from '../actionTypes';

export const GetVendorList = (): VendorActions => ({
  type: GET_VENDOR_LIST,
  api: {
    url: '/Vendor/GetVendorList',
    method: 'GET',
  },
});