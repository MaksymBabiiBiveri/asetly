import { CurrencyActions, CurrencyState } from '@Types/currency.type';
import { GET_CURRENCY_LIST, SUCCESS } from '../actionTypes';
import { concatActions } from '@helpers/functions';

const initialState: CurrencyState = {
  currencyList: [],
  loadingCurrency: false,
};
export const CurrencyReducer = (
  state = initialState,
  action: CurrencyActions
): CurrencyState => {
  switch (action.type) {
    case GET_CURRENCY_LIST:
      return {
        ...state,
        loadingCurrency: true,
      };
    case concatActions(GET_CURRENCY_LIST, SUCCESS):
      return {
        ...state,
        currencyList: [...state.currencyList, ...action.response.resultObject],
        loadingCurrency: false,
      };
    default:
      return {
        ...state,
      };
  }
};
