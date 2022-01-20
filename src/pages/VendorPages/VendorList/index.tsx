import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetVendorList } from '@Actions/vendor.action';
import { VendorState } from '@Types/vendor.types';
import { RootState } from '@RootStateType';
import { EmptyPage, TableHeaderActions } from '@components';
import { CustomTable } from '@UiKitComponents';
import { Loader } from '@common';
import { DataKeyType } from '@Types/application.types';
import classes from './VendorList.module.scss';

interface VendorListProps {}

const dataKeyVendorList: DataKeyType[] = [
  {
    key: 'name',
    label: 'Vendor Name',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
  {
    key: 'taxNumber',
    label: 'TXN',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
  {
    key: 'phone',
    label: 'Phone',
    align: 'left',
    flexGrow: 1,
  },
  {
    key: 'city.name',
    label: 'CITY',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
];

const getVendorState = (state: RootState) => state.VendorReducer;

const VendorList: React.FC<VendorListProps> = () => {
  const { vendorList, loadingVendor } = useSelector<RootState, VendorState>(
    getVendorState
  );

  const [checkedItemsList, setCheckedItemsList] = useState<number[] | string[]>(
    []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!vendorList.length) {
      dispatch(GetVendorList());
    }
  }, [vendorList]);

  if (loadingVendor) {
    return <Loader />;
  }

  if (vendorList && !vendorList.length) {
    return (
      <EmptyPage textButton="Vendor" redirectPath="newVendor">
        <h5>You don`t have vendors yet</h5>
        <h5>Click the button and create a new vendor</h5>
      </EmptyPage>
    );
  }

  return (
    <div className={classes.vendorList}>
      <div className={classes.vendorList_wrapper}>
        <TableHeaderActions
          checkedItemsList={checkedItemsList}
          pageCreatingUrl="/Vendors/newVendor"
          textRedirectButton="New Vendor"
        />
        <CustomTable
          data={vendorList}
          dataKey={dataKeyVendorList}
          currentDataKey="partnerId"
          setCheckedItemsList={setCheckedItemsList}
        />
      </div>
    </div>
  );
};

export default VendorList;
