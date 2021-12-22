import React, { memo, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import classes from './NewCompany.module.scss';

import { RootState } from '@RootStateType';
import { getCitiesList } from '@Actions/definition.action';

import { Button, Input } from '@UiKitComponents';
import { NewCompanyTypes } from '@Types/company.types';
import { postNewCompany } from '@Actions/company.action';
import { useNavigate } from 'react-router-dom';
import { Loader } from '@common';
import { createBrowserHistory } from 'history';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputBase } from '@mui/material';

let schema = yup.object({
  name: yup.string().required('This field is required'),
  partnerCode: yup.string().required('This field is required'),
  taxOffice: yup.string(),
  taxNumber: yup.string(),
  cityId: yup
    .number()
    .required('This field is required')
    .positive('The field is not valid. Numbers only')
    .truncate(),

  address: yup.string().required('This field is required'),
  email: yup.string().email('Email is not valid'),
  phone: yup.string().required('This field is required'),
});

const getDefinitionState = (state: RootState) => state.DefinitionReducer;
const getLoadingCompany = (state: RootState) =>
  state.CompanyReducer.loadingCompany;

interface NewCompanyProps {}

const NewCompany: React.FC<NewCompanyProps> = () => {
  const { citiesList, loadingDefinition } = useSelector(getDefinitionState);
  const loadingCompany = useSelector(getLoadingCompany);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const history = createBrowserHistory();
  console.log(control);
  const onSubmit = (newCompany: NewCompanyTypes) => {
    console.log(newCompany);
    dispatch(postNewCompany(newCompany));
    if (!loadingCompany) {
      navigate('/Companies');
    }
  };

  const backPageHandler = () => {
    history.back();
  };

  useEffect(() => {
    if (!citiesList.length && !loadingDefinition) {
      dispatch(getCitiesList());
    }
  });

  if (loadingCompany || loadingDefinition) {
    return <Loader />;
  }

  return (
    <div className={classes.newCompany}>
      <div className={classes.newCompany_wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.header_box}>
            <h5>New Company</h5>
            <div className={classes.button_box}>
              <Button color="outline" onClick={backPageHandler}>
                Cancel
              </Button>
              <Button
                color="primary"
                type="submit"
                disabled={!!Object.keys(errors).length && true}
              >
                Save
              </Button>
            </div>
          </div>
          <div className={classes.input_groups}>
            <div className={classes.input_box}>
              <h5 className={classes.input_group_title}>Summary</h5>
              <div className={classes.input_group}>
                <Controller
                  name="test"
                  control={control}
                  render={({ field }) => <InputBase {...field} />}
                />
                <Input
                  errorText={errors.name?.message}
                  id="CompanyName"
                  placeholder="Company name"
                  label="Company name"
                  required
                  {...register('name')}
                />
                <Input
                  errorText={errors.partnerCode?.message}
                  id="CompanyCode"
                  placeholder="Company code"
                  label="Partner code"
                  required
                  {...register('partnerCode')}
                />
              </div>
            </div>
            <div
              className={classes.input_box}
              style={{ alignSelf: 'flex-end' }}
            >
              <div className={classes.input_group}>
                <Input
                  errorText={errors.taxOffice?.message}
                  id="TaxOffice"
                  placeholder="Tax Office"
                  label="Tax Office"
                  {...register('taxOffice')}
                />
                <Input
                  errorText={errors.taxNumber?.message}
                  id="TXN"
                  placeholder="TXN"
                  label="TXN"
                  {...register('taxNumber')}
                />
              </div>
            </div>
          </div>
          <div className={classes.divider} />
          <div className={classes.input_groups}>
            <div className={classes.input_box}>
              <h5 className={classes.input_group_title}>Location</h5>
              <div className={classes.input_group}>
                <Input
                  errorText={errors.cityId?.message}
                  id="City"
                  placeholder="Choose city"
                  label="City"
                  type="number"
                  {...register('cityId', { valueAsNumber: true })}
                />

                <Input
                  errorText={errors.address?.message}
                  id="Address"
                  placeholder="Add address"
                  label="Address"
                  required
                  {...register('address')}
                />
              </div>
            </div>
            <div className={classes.input_box}>
              <h5 className={classes.input_group_title}>Contacts</h5>
              <div className={classes.input_group}>
                <Input
                  errorText={errors.email?.message}
                  id="Email"
                  placeholder="Email"
                  label="Email"
                  {...register('email')}
                />
                <Input
                  errorText={errors.phone?.message}
                  id="PhoneNumber"
                  placeholder="Phone number"
                  label="Phone number"
                  required
                  {...register('phone')}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(NewCompany);
