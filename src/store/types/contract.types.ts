import { Company } from '@Types/company.types';
import { BaseAction, Concat } from '@Types/index';
import { GET_CONTRACTS_LIST, SUCCESS } from '../actionTypes';

export type Contract = {
  contractCode: string;
  contractId: string;
  name: string;
  no: string;
  companyId: number;
  partnerId: number;
  startDate: string;
  endDate: string;
  price: number;
  contractFile: string;
  isNotificationOn: boolean;
  description: string;
  createdDate: string;
  creatorId: number;
  modifiedDate: string;
  modifiedId: number;
  isActive: boolean;
  isValid: boolean;
  currencyId: number;
  company: Company[];
  //TODO: как узнаем тип изменить any
  partner: any;
  nonCurrAssetContracts: any;
};
export type NewContract = {
  contractCode: string;
  name: string;
  no: string;
  price: number;
  partnerId: number;
  currencyId: number;
  startDate: string;
  endDate: string;
  contractFile: string;
  description: string;
};

export interface ContractState {
  contracts: Contract[] | [];
  loadingContract: boolean;
}

export interface GetContractsList
  extends BaseAction<typeof GET_CONTRACTS_LIST> {}
export interface GetContractsListSuccess
  extends BaseAction<Concat<typeof GET_CONTRACTS_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Contract[];
  };
}

export type ContractActions = GetContractsList | GetContractsListSuccess;
