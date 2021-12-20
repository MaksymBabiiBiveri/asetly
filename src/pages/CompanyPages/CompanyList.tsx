import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCompanyList } from '../../store/actions/company.action';
import { CompanyTypes } from '../../store/types/company.types';
import classes from './CompanyList.module.scss';
import { Button, EmptyPage } from '@components';
import { RootState } from '../../store';

interface CompanyListProps {}

const CompanyList: React.FC<CompanyListProps> = () => {
  const dispatch = useDispatch();
  const companyList = useSelector<RootState, CompanyTypes[]>(
    (state) => state.CompanyReducer.companyList
  );
  useEffect(() => {
    if (!companyList.length) {
      dispatch(GetCompanyList());
    }
  }, []);

  if (companyList && companyList.length) {
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
          <Button color="primary">test</Button>
        </div>
        <div className={classes.companyList_table_wrapper}>
          {companyList.map((el) => (
            <div key={el.partnerId}>{el.email}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
