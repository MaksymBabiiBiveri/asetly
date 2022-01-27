import { SiteActions, SiteState } from '../types/site.types';
import { concatActions } from '@helpers/functions';
import { 
  DELETE_SITE,
  GET_SITE_LIST, 
  GET_ONE_SITE,
  POST_NEW_SITE, 
  PUT_SITE,
  SUCCESS,
  FAIL 
} from '../actionTypes';

const initialState: SiteState = {
  siteList: [],
  currentSite: null,
  loadingSite: false,
};

export const SiteReducer = (
  state = initialState,
  action: SiteActions
): SiteState => {
  switch (action.type) {
    case GET_SITE_LIST:
      return {
        ...state,
        loadingSite: true,
      };
    case concatActions(GET_SITE_LIST, SUCCESS):
      return {
        ...state,
        siteList: [...state.siteList, ...action.response.resultObject],
        loadingSite: false,
      };
    case GET_ONE_SITE:
      return {
        ...state,
        loadingSite: true,
      };
    case concatActions(GET_ONE_SITE, SUCCESS):
      return {
        ...state,
        currentSite: action.response.resultObject,
        loadingSite: false,
      };
    case POST_NEW_SITE:
      return {
        ...state,
        loadingSite: true,
      };
    case concatActions(POST_NEW_SITE, SUCCESS):
      return {
        ...state,
        siteList: [...state.siteList, action.response.resultObject],
        loadingSite: false,
      };
    case concatActions(POST_NEW_SITE, FAIL):
      return {
        ...state,
        loadingSite: false,
      };
    case PUT_SITE:
      return {
        ...state,
        loadingSite: true,
      };
    case concatActions(PUT_SITE, SUCCESS):
      return {
        ...state,
        loadingSite: false,
      };
    case DELETE_SITE:
      return {
        ...state,
      };
    case concatActions(DELETE_SITE, SUCCESS):
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
