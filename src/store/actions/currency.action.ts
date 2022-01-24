import { CurrencyActions } from '@Types/currency.type';
import { GET_CURRENCY_LIST } from '../actionTypes';

export const getCurrencyList = (): CurrencyActions => ({
  type: GET_CURRENCY_LIST,
  api: {
    url: '/Currency/GetCurrencyList',
    method: 'GET',
  },
});
