import { VendorActions, VendorState } from '../types/vendor.types';
import { concatActions } from '@helpers/functions';
import { GET_VENDOR_LIST, POST_NEW_VENDOR, SUCCESS } from '../actionTypes';

const initialState: VendorState = {
  vendorList: [],
  loadingVendor: false,
};

export const VendorReducer = (
  state = initialState,
  action: VendorActions
): VendorState => {
  switch (action.type) {
    case GET_VENDOR_LIST:
      return {
        ...state,
        loadingVendor: true,
      };
    case concatActions(GET_VENDOR_LIST, SUCCESS):
      return {
        ...state,
        vendorList: [...state.vendorList, ...action.response.resultObject],
        loadingVendor: false,
      };
    case POST_NEW_VENDOR:
      return {
        ...state,
        loadingVendor: true,
      };
    case concatActions(POST_NEW_VENDOR, SUCCESS):
      return {
        ...state,
        vendorList: [...state.vendorList, action.response.resultObject],
        loadingVendor: false,
      };
    default:
      return {
        ...state,
      };
  }
};
