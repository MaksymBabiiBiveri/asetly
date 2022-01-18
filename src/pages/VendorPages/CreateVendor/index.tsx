import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CreateVendor.module.scss';
import { RootState } from '@RootStateType';
import { getCitiesList, getCountriesList } from '@Actions/definition.action';
import { CustomInput, CustomSelect, Form, Divider } from '@UiKitComponents';
import { NewVendor } from '@Types/vendor.types';
import { postNewVendor } from '@Actions/vendor.action';
import { Loader } from '@common';
import { useBackHistory } from '@hooks';
import { schemaVendor } from '@schema/vendor';
import { HeaderSaveAction, InputContainer } from '@components';
import { City } from '@Types/definition.types';

interface CreateVendorProps {}

const getLoadingVendor = (state: RootState) => 
  state.VendorReducer.loadingVendor;
const getDefinitionState = (state: RootState) => 
  state.DefinitionReducer;

  const CreateVendor: React.FC<CreateVendorProps> = () => {
    const { citiesList, countriesList, loadingDefinition } = useSelector(getDefinitionState);
    const loadingVendor = useSelector(getLoadingVendor);
    const dispatch = useDispatch();
    const backHistory = useBackHistory();

    const [countryId, setCountryId] = useState<number | undefined | string>();
  
  const onSubmit = (newVendor: NewVendor) => {
    dispatch(postNewVendor(newVendor));
  };

  const getCountryValue = (countryId: number | undefined | string) => {
    setCountryId(countryId)
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

  if (loadingVendor) {
    return <Loader />;
  }

  return (
    <div className={classes.newVendor}>
      <div className={classes.newVendor_wrapper}>
        <Form<NewVendor> onSubmit={onSubmit} yupSchema={schemaVendor}>
          {({ register, formState: { errors }, control }) => (
            <>
              <HeaderSaveAction 
                title="New Vendor" 
                errors={errors}
                onCancelButton={backHistory} 
              />
              <div className={classes.form_box}>
                <InputContainer title="Summary">
                  <CustomInput
                    errorText={errors.name?.message}
                    id="VendorName"
                    placeholder="Vendor name"
                    label="Vendor name"
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
                    errorText={errors.partnerCode?.message}
                    id="PartnerCode"
                    placeholder="Vendor code"
                    label="Vendor code"
                    required
                    {...register('partnerCode')}
                  />
                  <CustomInput
                    errorText={errors.taxNumber?.message}
                    id="TXN"
                    placeholder="TXN"
                    label="TXN"
                    required
                    {...register('taxNumber')}
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
                      errorText={errors.email?.message}
                      id="Email"
                      placeholder="Email"
                      label="Email"
                      {...register('email')}
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

export default memo(CreateVendor);