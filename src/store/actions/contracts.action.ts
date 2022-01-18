import { ContractActions } from '@Types/contract.types';
import { GET_CONTRACTS_LIST } from '../actionTypes';

export const getContractList = (): ContractActions => ({
  type: GET_CONTRACTS_LIST,
  api: {
    url: '/Contract/GetContractListByCompanyId',
    method: 'GET',
  },
});
