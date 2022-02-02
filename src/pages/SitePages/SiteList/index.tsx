import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetSiteList } from '@Actions/site.action';
import { SiteState } from '@Types/site.types';
import { RootState } from '@RootStateType';
import { EmptyPage, TableHeaderActions } from '@components';
import { CustomTable } from '@UiKitComponents';
import { Loader } from '@common';
import { DataKeyType } from '@Types/application.types';
import classes from './SiteList.module.scss';

interface SiteListProps {}

const dataKeySiteList: DataKeyType[] = [
  {
    key: 'name',
    label: 'SITE NAME',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
  {
    key: 'siteCode',
    label: 'SITE CODE',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
  {
    key: 'barcode',
    label: 'SITE BARCODE',
    align: 'left',
    flexGrow: 1,
  },
  {
    key: 'country.name',
    label: 'COUNTRY',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
  {
    key: 'city.name',
    label: 'CITY',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
];

const getSiteState = (state: RootState) => state.SiteReducer;

const SiteList: React.FC<SiteListProps> = () => {
  const { siteList, loadingSite } = useSelector<RootState, SiteState>(
    getSiteState
  );

  const [checkedItemsList, setCheckedItemsList] = useState<number[] | string[]>(
    []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!siteList.length) {
      dispatch(GetSiteList());
    }
  }, [siteList]);

  if (loadingSite) {
    return <Loader />;
  }

  console.log(siteList);
  

  if (siteList && !siteList.length) {
    return (
      <EmptyPage textButton="Site" redirectPath="newSite">
        <h5>You don`t have site yet</h5>
        <h5>Click the button and create a new site</h5>
      </EmptyPage>
    );
  }

  return (
    <div className={classes.siteList}>
      <div className={classes.siteList_wrapper}>
        <TableHeaderActions
          checkedItemsList={checkedItemsList}
          pageCreatingUrl="/Locations/newLocation"
          textRedirectButton="New Site"
        />
        <CustomTable
          data={siteList}
          dataKey={dataKeySiteList}
          currentDataKey="siteId"
          setCheckedItemsList={setCheckedItemsList}
        />
      </div>
    </div>
  );
};

export default SiteList;
