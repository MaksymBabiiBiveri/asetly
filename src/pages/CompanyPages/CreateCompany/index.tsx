import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CreateCompany.module.scss';
import { RootState } from '@RootStateType';
import { Form, Divider, CustomInput, CustomSelect } from '@UiKitComponents';
import { NewCompany } from '@Types/company.types';
import { postNewCompany } from '@Actions/company.action';
import { Loader } from '@common';
import { HeaderSaveAction, InputContainer } from '@components';
import { useBackHistory } from '@hooks';
import { schemaCompany } from '@schema/company';
import { getCitiesList, getCountriesList } from '@Actions/definition.action';
import { City } from '@Types/definition.types';

interface CreateCompanyProps {}

const getLoadingCompany = (state: RootState) =>
  state.CompanyReducer.loadingCompany;

const getDefinitionState = (state: RootState) => state.DefinitionReducer;

const CreateCompany: React.FC<CreateCompanyProps> = () => {
  const loadingCompany = useSelector(getLoadingCompany);
  const { loadingDefinition, countriesList, citiesList } =
    useSelector(getDefinitionState);
  const dispatch = useDispatch();
  const backHistory = useBackHistory();

  const [countryId, setCountryId] = useState<number | undefined | string>();

  const onSubmit = (newCompany: NewCompany) => {
    dispatch(postNewCompany(newCompany));
  };

  const getCountryValue = (countryId: number | undefined | string) => {
    setCountryId(countryId);
  };

  const filterCity = (): City[] => {
    return citiesList.filter((city) => city.countryId === countryId);
  };

  useEffect(() => {
    if (!countriesList.length && !loadingDefinition) {
      dispatch(getCountriesList());
    }
    if (!citiesList.length && !loadingDefinition) {
      dispatch(getCitiesList());
    }
  }, []);

  if (loadingCompany) {
    return <Loader />;
  }

  return (
    <div className={classes.newCompany}>
      <div className={classes.newCompany_wrapper}>
        <Form<NewCompany> onSubmit={onSubmit} yupSchema={schemaCompany}>
          {({ register, formState: { errors }, control }) => (
            <>
              <HeaderSaveAction
                title="New Company"
                errors={errors}
                onCancelButton={backHistory}
              />
              <div className={classes.form_box}>
                <InputContainer title="Summary">
                  <CustomInput
                    errorText={errors.name?.message}
                    id="CompanyName"
                    placeholder="Company name"
                    label="Company name"
                    required
                    {...register('name')}
                  />
                  <CustomInput
                    errorText={errors.taxOffice?.message}
                    id="TaxOffice"
                    placeholder="Tax Office"
                    label="Tax Office"
                    {...register('taxOffice')}
                  />
                  <CustomInput
                    errorText={errors.companyCode?.message}
                    id="CompanyCode"
                    placeholder="Company code"
                    label="Company code"
                    required
                    {...register('companyCode')}
                  />

                  <CustomInput
                    errorText={errors.taxNumber?.message}
                    id="TXN"
                    placeholder="TXN"
                    label="TXN"
                    required
                    {...register('taxNumber', { valueAsNumber: true })}
                  />
                </InputContainer>
                <Divider margin="50px 0 30px 0" />
                <div className="markup_helper-box">
                  <InputContainer title="Location">
                    <CustomSelect
                      errorText={errors.countryId?.message}
                      label="Country"
                      id="Country"
                      name="countryId"
                      control={control}
                      placeholder="Choose country"
                      mappingOptions={countriesList}
                      optionValue="countryId"
                      optionLabel="name"
                      isLoading={loadingDefinition}
                      isDisabled={loadingDefinition}
                      getOptionValue={getCountryValue}
                      required
                    />
                    <CustomSelect
                      errorText={errors.cityId?.message}
                      label="City"
                      id="City"
                      name="cityId"
                      control={control}
                      placeholder="Choose city"
                      mappingOptions={filterCity()}
                      optionValue="cityId"
                      optionLabel="name"
                      isDisabled={loadingDefinition || !filterCity().length}
                      isLoading={loadingDefinition}
                      required
                    />

                    <CustomInput
                      errorText={errors.address?.message}
                      id="Address"
                      placeholder="Add address"
                      label="Address"
                      required
                      {...register('address')}
                    />
                  </InputContainer>
                  <InputContainer title="Contacts">
                    <CustomInput
                      errorText={errors.contactName?.message}
                      id="Email"
                      placeholder="Email"
                      label="Email"
                      required
                      {...register('contactName')}
                    />
                    <CustomInput
                      errorText={errors.phone?.message}
                      id="PhoneNumber"
                      placeholder="Phone number"
                      label="Phone number"
                      required
                      {...register('phone')}
                    />
                  </InputContainer>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};

export default memo(CreateCompany);
