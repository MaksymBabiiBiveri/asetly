import { BaseAction, Concat } from './index';
import { GET_CITIES_LIST, GET_COUNTRIES_LIST, SUCCESS } from '../actionTypes';

export type Country = {
  countryId: number;
  twoCharCountryCode: null | string;
  name: string;
  phoneCode: null | string;
  cities: City[];
};

export type City = {
  cityId: number;
  name: string;
  countryId: number;
  orderId: number;
  country: Country;
  //TODO: как узнаем тип массива изменить any
  partners: any[];
  companies: any[];
  sites: any[];
};

export interface DefinitionState {
  citiesList: City[];
  countriesList: Country[];
  loadingDefinition: boolean;
}

export interface GetCountriesList
  extends BaseAction<typeof GET_COUNTRIES_LIST> {}
export interface GetCountriesListSuccess
  extends BaseAction<Concat<typeof GET_COUNTRIES_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Country[];
  };
}

export interface GetCitiesList extends BaseAction<typeof GET_CITIES_LIST> {}
export interface GetCitiesListSuccess
  extends BaseAction<Concat<typeof GET_CITIES_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: City[];
  };
}

export type DefinitionActions =
  | GetCitiesList
  | GetCitiesListSuccess
  | GetCountriesList
  | GetCountriesListSuccess;
