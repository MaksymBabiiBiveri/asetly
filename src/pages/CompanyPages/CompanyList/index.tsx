import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CompanyList.module.scss';
import { GetCompanyList } from '@Actions/company.action';
import { CompanyState } from '@Types/company.types';
import { RootState } from '@RootStateType';
import { EmptyPage, TableHeaderActions } from '@components';
import { CustomTable } from '@UiKitComponents';
import { Loader } from '@common';
import { DataKeyType } from '@Types/application.types';

interface CompanyListProps {}

const dataKeyCompanyList: DataKeyType[] = [
  {
    key: 'companyId',
    label: 'Company Id',
    align: 'center',
    width: 110,
    sortable: true,
  },
  {
    key: 'name',
    label: 'Company Name',
    align: 'center',
    flexGrow: 1,
    sortable: true,
  },

  {
    key: 'companyCode',
    label: 'Company Code',
    align: 'center',
    flexGrow: 1,
  },
  {
    key: 'address',
    label: 'Address',
    align: 'center',
    flexGrow: 1,
    sortable: true,
  },
];

const getCompanyState = (state: RootState) => state.CompanyReducer;

const CompanyList: React.FC<CompanyListProps> = () => {
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
  }, []);

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
          dataKeyCheckbox="companyId"
          setCheckedItemsList={setCheckedItemsList}
        />
      </div>
    </div>
  );
};

export default CompanyList;
