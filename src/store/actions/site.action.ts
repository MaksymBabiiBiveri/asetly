import { SiteActions, TCreateSite, TUpdateSite } from '@Types/site.types';
import { 
  DELETE_SITE, 
  GET_SITE_LIST, 
  GET_ONE_SITE, 
  POST_NEW_SITE, 
  PUT_SITE 
} from '../actionTypes';

export const GetSiteList = (): SiteActions => ({
  type: GET_SITE_LIST,
  api: {
    url: '/Sites/GetSitesList',
    method: 'GET',
  },
});

export const GetOneSite = (id: string | number): SiteActions => ({
  type: GET_ONE_SITE,
  api: {
    url: `/Sites/GetSitesById/${id}`,
    method: 'GET',
  },
});

export const postNewSite = (newSite: TCreateSite): SiteActions => ({
  type: POST_NEW_SITE,

  api: {
    url: '/Sites/AddSite',
    method: 'POST',
    data: {
      ...newSite,
    },
  },
});

export const updateSite = (site: TUpdateSite): SiteActions => ({
  type: PUT_SITE,
  api: {
    url: '/Sites/UpdateSite',
    method: 'PUT',
    data: {
      ...site,
    },
  },
});

export const deleteSite = (siteIds: number[]): SiteActions => ({
  type: DELETE_SITE,
  api: {
    url: `/Sites/RemoveByIdList`,
    method: 'POST',
    data: {
      SiteIds: siteIds,
    },
  },
});
