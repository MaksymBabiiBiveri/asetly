import { ContractActions, ContractState } from '@Types/contract.types';

const initialState: ContractState = {
  contracts: [],
  loadingContract: false,
};

export const ContractReducer = (
  state = initialState,
  action: ContractActions
): ContractState => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
