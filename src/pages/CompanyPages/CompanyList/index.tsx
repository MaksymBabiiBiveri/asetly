import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './CompanyList.module.scss';

import { GetCompanyList } from '@Actions/company.action';
import { CompanyState } from '@Types/company.types';
import { RootState } from '@RootStateType';

import { EmptyPage, Form } from '@components';
import { Button, InputWrapper } from '@UiKitComponents';
import { Loader } from '@common';
import { useNavigate } from 'react-router-dom';

interface CompanyListProps {}

const getCompanyState = (state: RootState) => state.CompanyReducer;

const CompanyList: React.FC<CompanyListProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { companyList, loadingCompany } = useSelector<RootState, CompanyState>(
    getCompanyState
  );
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

  const onSubmit = (data: any) => console.log(data);

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
        <div className={classes.companyList_table_wrapper}>
          {companyList.map((el) => (
            <div key={el.partnerId}>{el.email}</div>
          ))}
        </div>

        <Form onSubmit={onSubmit}>
          <InputWrapper
            label="TEST"
            id="TEST"
            errorText="TEST"
            placeholder="TEST"
            name="TEST1"
          />
          <InputWrapper
            label="TEST2"
            id="TEST2"
            errorText="TEST2"
            placeholder="TEST2"
            name="TEST2"
          />
          <InputWrapper
            label="TEST3"
            id="TEST3"
            errorText="TEST3"
            placeholder="TEST3"
            name="TEST3"
          />
          <InputWrapper
            label="TEST4"
            id="TEST4"
            errorText="TEST4"
            placeholder="TEST4"
            name="TEST4"
          />
          <Button color="primary" type="submit">
            Suub
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CompanyList;
