import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './ListCompany.module.scss';
import { GetCompanyList } from '@Actions/company.action';
import { CompanyState } from '@Types/company.types';
import { RootState } from '@RootStateType';
import { EmptyPage, TableHeaderActions } from '@components';
import { CustomTable } from '@UiKitComponents';
import { Loader } from '@common';
import { DataKeyType } from '@Types/application.types';

interface ListCompanyProps {}

const dataKeyCompanyList: DataKeyType[] = [
  {
    key: 'companyId',
    label: 'Company Id',
    align: 'left',
    width: 110,
    sortable: true,
  },
  {
    key: 'name',
    label: 'Company Name',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },

  {
    key: 'companyCode',
    label: 'Company Code',
    align: 'left',
    flexGrow: 1,
  },
  {
    key: 'address',
    label: 'Address',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
];

const getCompanyState = (state: RootState) => state.CompanyReducer;

const ListCompany: React.FC<ListCompanyProps> = () => {
  const { companyList, loadingCompany } = useSelector<RootState, CompanyState>(
    getCompanyState
  );
  const [checkedItemsList, setCheckedItemsList] = useState<number[] | string[]>(
    []
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!companyList.length) {
      dispatch(GetCompanyList());
    }
  }, [companyList]);

  if (loadingCompany) {
    return <Loader />;
  }

  if (companyList && !companyList.length) {
    return (
      <EmptyPage textButton="Company" redirectPath="newCompany">
        <h5>You don`t have companies yet</h5>
        <h5>Click the button and create a new company</h5>
      </EmptyPage>
    );
  }

  return (
    <div className={classes.companyList}>
      <div className={classes.companyList_wrapper}>
        <TableHeaderActions
          checkedItemsList={checkedItemsList}
          pageCreatingUrl="/Companies/newCompany"
        />
        <CustomTable
          data={companyList}
          dataKey={dataKeyCompanyList}
          currentDataKey="companyId"
          setCheckedItemsList={setCheckedItemsList}
        />
      </div>
    </div>
  );
};

export default ListCompany;