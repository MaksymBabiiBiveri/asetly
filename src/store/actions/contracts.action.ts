import { ContractActions, NewContract } from '@Types/contract.types';
import { GET_CONTRACTS_LIST, POST_NEW_CONTRACT } from '../actionTypes';

export const getContractList = (): ContractActions => ({
  type: GET_CONTRACTS_LIST,
  api: {
    url: '/Contract/GetContractListByCompanyId',
    method: 'GET',
  },
});
export const postNewContract = (newContract: NewContract): ContractActions => ({
  type: POST_NEW_CONTRACT,
  api: {
    url: '/Contract/AddContract',
    method: 'POST',
    data: { ...newContract },
  },
});
