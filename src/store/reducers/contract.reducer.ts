import { ContractActions, ContractState } from '@Types/contract.types';
import { GET_CONTRACTS_LIST, SUCCESS } from '../actionTypes';
import { concatActions } from '@helpers/functions';

const initialState: ContractState = {
  contracts: [],
  loadingContract: false,
};

export const ContractReducer = (
  state = initialState,
  action: ContractActions
): ContractState => {
  switch (action.type) {
    case GET_CONTRACTS_LIST:
      return {
        ...state,
        loadingContract: true,
      };
    case concatActions(GET_CONTRACTS_LIST, SUCCESS):
      return {
        ...state,
        contracts: [...state.contracts, ...action.response.resultObject],
        loadingContract: false,
      };
    default:
      return {
        ...state,
      };
  }
};
