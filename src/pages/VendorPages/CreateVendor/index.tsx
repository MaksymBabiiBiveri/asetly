import React, { memo, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@RootStateType';
import { getCitiesList, getCountriesList } from '@Actions/definition.action';
import { CustomInput, CustomSelect, Divider } from '@UiKitComponents';
import { TFormCreateVendor } from '@Types/vendor.types';
import { postNewVendor } from '@Actions/vendor.action';
import { Loader } from '@common';
import { useBackHistory } from '@hooks';
import { schemaVendor } from '@schema/vendor';
import { HeaderSaveAction, InputContainer } from '@components';
import { City } from '@Types/definition.types';
import { TSelectValue } from '@Types/application.types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface CreateVendorProps {}

const getLoadingVendor = (state: RootState) => state.VendorReducer.loadingVendor;
const getDefinitionState = (state: RootState) => state.DefinitionReducer;

const CreateVendor: React.FC<CreateVendorProps> = () => {
  const { citiesList, countriesList, loadingDefinition } = useSelector(getDefinitionState);
  const loadingVendor = useSelector(getLoadingVendor);

  const dispatch = useDispatch();
  const backHistory = useBackHistory();

  const [countryValue, setCountryValue] = useState<TSelectValue<number>>();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<TFormCreateVendor>({
    resolver: yupResolver(schemaVendor),
  });

  const memoizedControl = useMemo(() => control, []);

  const onSubmit = (vendor: TFormCreateVendor) => {
    const newVendor = {
      ...vendor,
      cityId: vendor.cityId.value,
      countryId: vendor.countryId.value,
    };
    dispatch(postNewVendor(newVendor));
  };

  const getCountryValue = (country: TSelectValue<number>) => {
    setCountryValue(country);
  };

  const filterCity = (): City[] => {
    return citiesList.filter((city) => city.countryId === countryValue?.value);
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
    <div>
      <div className="padding_wrapper_page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeaderSaveAction title="New Vendor" errors={errors} onCancelButton={backHistory} />
          <div className="form_box">
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
                  label="Country"
                  id="Country"
                  name="countryId"
                  control={memoizedControl}
                  placeholder="Choose country"
                  options={countriesList}
                  optionValue="countryId"
                  optionLabel="name"
                  isLoading={loadingDefinition}
                  isDisabled={loadingDefinition}
                  getSelectValue={getCountryValue}
                  required
                />
                <CustomSelect
                  label="City"
                  id="City"
                  name="cityId"
                  control={memoizedControl}
                  placeholder="Choose city"
                  options={filterCity()}
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
        </form>
      </div>
    </div>
  );
};

export default memo(CreateVendor);
