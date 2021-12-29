import { VendorActions, VendorState } from '../types/vendor.types';
import { concatActions } from '@helpers/functions';
import { GET_VENDOR_LIST, SUCCESS } from '../actionTypes';

const initialState: VendorState = {
  vendorList: [],
};

export const CompanyReducer = (
  state = initialState,
  action: VendorActions
): VendorState => {
  switch (action.type) {
    case concatActions(GET_VENDOR_LIST, SUCCESS):
      return {
        ...state,
        vendorList: action.response.resultObject,
      };
    default:
      return {
        ...state,
      };
  }
};
