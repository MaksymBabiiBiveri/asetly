import { BaseAction, Concat } from '@Types/index';
import { GET_CURRENCY_LIST, SUCCESS } from '../actionTypes';

export type Currency = {
  currencyId: number;
  name: string;
  symbol: string;
  isValid: boolean | null;
  nonCurrAssetsCurrency: any[];
  nonCurrAssetsIfrscurrecy: any[];
};

export interface CurrencyState {
  currencyList: Currency[];
  loadingCurrency: boolean;
}

export interface GetCurrencyList extends BaseAction<typeof GET_CURRENCY_LIST> {}
export interface GetCurrencyListSuccess
  extends BaseAction<Concat<typeof GET_CURRENCY_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Currency[];
  };
}

export type CurrencyActions = GetCurrencyList | GetCurrencyListSuccess;
