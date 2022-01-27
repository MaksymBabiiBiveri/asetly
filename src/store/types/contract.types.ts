import { Company } from '@Types/company.types';
import { BaseAction, Concat } from '@Types/index';
import { GET_CONTRACTS_LIST, POST_NEW_CONTRACT, SUCCESS } from '../actionTypes';
import { TSelectValue } from '@Types/application.types';

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
export type TCreateContract = {
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
export type TFormCreateContract = Omit<
  TCreateContract,
  'partnerId' | 'currencyId'
> & {
  partnerId: TSelectValue<number>;
  currencyId: TSelectValue<number>;
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

export interface PostNewContract extends BaseAction<typeof POST_NEW_CONTRACT> {}
export interface PostNewContractSuccess
  extends BaseAction<Concat<typeof POST_NEW_CONTRACT, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Contract[];
  };
}

export type ContractActions =
  | GetContractsList
  | GetContractsListSuccess
  | PostNewContract
  | PostNewContractSuccess;
