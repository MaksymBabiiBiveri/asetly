import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './CompanyList.module.scss';

import { GetCompanyList } from '@Actions/company.action';
import { CompanyState } from '@Types/company.types';
import { RootState } from '@RootStateType';

import { EmptyPage } from '@components';
import { Button, CustomTable } from '@UiKitComponents';
import { Loader } from '@common';
import { useNavigate } from 'react-router-dom';

interface CompanyListProps {}

const getCompanyState = (state: RootState) => state.CompanyReducer;

const CompanyList: React.FC<CompanyListProps> = () => {
  const { companyList, loadingCompany } = useSelector<RootState, CompanyState>(
    getCompanyState
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        <div className={classes.button_wrapper}>
          <Button
            color="primary"
            onClick={() => navigate('/Companies/newCompany')}
          >
            test
          </Button>
        </div>
        {/*<div className={classes.companyList_table_wrapper}>*/}
        {/*  {companyList.map((el) => (*/}
        {/*    <div key={el.name}>{el.name}</div>*/}
        {/*  ))}*/}
        {/*</div>*/}
        <CustomTable />
      </div>
    </div>
  );
};

export default CompanyList;
