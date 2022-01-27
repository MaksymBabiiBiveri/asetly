import { BaseAction, Concat } from './index';
import {
  DELETE_SITE,
  GET_SITE_LIST,
  GET_ONE_SITE,
  POST_NEW_SITE,
  PUT_SITE,
  SUCCESS,
  FAIL,
} from '../actionTypes';
import { City, Country } from '@Types/definition.types';
import { TSelectValue } from '@Types/application.types';

export type Site = {
  address: string;
  area: string;
  barcode: string;
  city: City;
  cityId: number;
  companyId: number;
  coordinate: string;
  countryId: number;
  country: Country;
  createdDate: number;
  creatorId: number;
  description: string;
  inverseParentSite: any[];
  isValid: boolean;
  modifiedDate: string;
  modifiedId: number;
  name: string;
  nonCurrAssets: any[];
  parentSite: null | object;
  parentSiteId: number;
  postCode: string;
  prdCountPlanSites: any[];
  prdCountResultsNonCurrAssetSite: any[];
  prdCountResultsPlanSite: any[];
  siteCode: string;
  siteId: number;
  suppliesLogs: any[];
  suppliess: any[];
  town: string;
  userAuthorizedSites: any[];
  users: any[];
};

export type TCreateSite = {
  siteCode: string;
  siteId: number;
  parentSiteId: number;
  companyId: number;
  name: string;
  barcode: string;
  coordinate: string;
  address: string;
  description: string;
  town: string;
  cityId: number;
  countryId: number;
  postCode: string;
  area: string;
};
export type TFormCreateSite = Omit<TCreateSite, 'countryId' | 'cityId'> & {
  countryId: TSelectValue<number>;
  cityId: TSelectValue<number>;
};

export type TUpdateSite = TCreateSite & Pick<Site, 'siteId'>;

export interface SiteState {
  siteList: Site[] | [];
  currentSite: Site | null;
  loadingSite: boolean;
}

export interface GetSiteList extends BaseAction<typeof GET_SITE_LIST> {}
export interface GetSiteListSuccess
  extends BaseAction<Concat<typeof GET_SITE_LIST, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Site[];
  };
}

export interface GetOneSite extends BaseAction<typeof GET_ONE_SITE> {}
export interface GetOneSiteSuccess
  extends BaseAction<Concat<typeof GET_ONE_SITE, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    resultObject: Site;
  };
}

export interface PostNewSite extends BaseAction<typeof POST_NEW_SITE> {}
export interface PostNewSiteSuccess
  extends BaseAction<Concat<typeof POST_NEW_SITE, typeof SUCCESS>> {
  response: {
    resultObject: Site;
  };
}
export interface PostNewSiteFail
  extends BaseAction<Concat<typeof POST_NEW_SITE, typeof FAIL>> {}

export interface UpdateSite extends BaseAction<typeof PUT_SITE> {}
export interface UpdateSiteSuccess
  extends BaseAction<Concat<typeof PUT_SITE, typeof SUCCESS>> {
  response: {
    resultObject: Site;
  };
}

export interface DeleteSite extends BaseAction<typeof DELETE_SITE> {}
export interface DeleteSiteSuccess
  extends BaseAction<Concat<typeof DELETE_SITE, typeof SUCCESS>> {
  response: {
    resultStatus: boolean;
    languageKeyword: string;
    resultObject: [];
  };
}

export type SiteActions =
  | GetSiteList
  | GetSiteListSuccess
  | GetOneSite
  | GetOneSiteSuccess
  | PostNewSite
  | PostNewSiteSuccess
  | PostNewSiteFail
  | UpdateSite
  | UpdateSiteSuccess
  | DeleteSite
  | DeleteSiteSuccess;
