import { BaseAction, Concat } from './index';
import { GET_CITIES_LIST, SUCCESS } from '../actionTypes';

export type Country = {
  countryId: number;
  twoCharCountryCode: null | string;
  name: string;
  phoneCode: null | string;
  //TODO: как узнаем тип массива изменить any
  cities: City[];
};

export type City = {
  cityId: number;
  name: string;
  countryId: number;
  orderId: number;
  country: Country | null;
  //TODO: как узнаем тип массива изменить any
  partners: any[];
  companies: any[];
  sites: any[];
};

export interface DefinitionState {
  citiesList: City[];
  loadingDefinition: boolean;
}

export interface GetCitiesList extends BaseAction<typeof GET_CITIES_LIST> {}
export interface GetCitiesListSuccess
  extends BaseAction<Concat<typeof GET_CITIES_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: City[];
  };
}

export type DefinitionActions = GetCitiesList | GetCitiesListSuccess;
