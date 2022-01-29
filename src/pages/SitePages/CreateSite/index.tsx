import React, { memo, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@RootStateType';
import { getCitiesList, getCountriesList } from '@Actions/definition.action';
import { CustomInput, CustomSelect, Divider } from '@UiKitComponents';
import { TFormCreateSite, SiteState } from '@Types/site.types';
import { postNewSite, GetSiteList } from '@Actions/site.action';
import { Loader } from '@common';
import { useBackHistory } from '@hooks';
import { schemaSite } from '@schema/site';
import { HeaderSaveAction, InputContainer } from '@components';
import { City } from '@Types/definition.types';
import { TSelectValue } from '@Types/application.types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface CreateSiteProps {}

const getLoadingSite = (state: RootState) => state.SiteReducer.loadingSite;
const getDefinitionState = (state: RootState) => state.DefinitionReducer;
const getSiteState = (state: RootState) => state.SiteReducer;

const CreateSite: React.FC<CreateSiteProps> = () => {
  const { citiesList, countriesList, loadingDefinition } = useSelector(getDefinitionState);
  const { siteList } = useSelector<RootState, SiteState>(
    getSiteState
  );
  const loadingSite = useSelector(getLoadingSite);

  const dispatch = useDispatch();
  const backHistory = useBackHistory();

  const [countryValue, setCountryValue] = useState<TSelectValue<number>>();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<TFormCreateSite>({
    resolver: yupResolver(schemaSite),
  });

  const memoizedControl = useMemo(() => control, []);

  const onSubmit = (site: TFormCreateSite) => {
    const newSite = {
      ...site,
      cityId: site.cityId.value,
      countryId: site.countryId.value,
    };
    dispatch(postNewSite(newSite));
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

  useEffect(() => {
    if (!siteList.length) {
      dispatch(GetSiteList());
    }
  }, [siteList]);

  if (loadingSite) {
    return <Loader />;
  }

  return (
    <div>
      <div className="padding_wrapper_page">
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeaderSaveAction title="New Site" errors={errors} onCancelButton={backHistory} />
          <div className="form_box">
            <InputContainer title="Summary">
              <CustomInput
                errorText={errors.name?.message}
                id="SiteName"
                placeholder="Site name"
                label="Site name"
                required
                {...register('name')}
              />
              <CustomInput
                errorText={errors.barcode?.message}
                id="SiteBarcode"
                placeholder="Site Barcode"
                label="Site Barcode"
                required
                {...register('barcode')}
              />
              <CustomInput
                errorText={errors.siteCode?.message}
                id="SiteCode"
                placeholder="Site code"
                label="Site code"
                required
                {...register('siteCode')}
              />
              <CustomSelect
                label="Parent site"
                id="ParentSiteId"
                name="parentSiteId"
                control={memoizedControl}
                placeholder="Choose parent site"
                options={siteList}
                optionValue="parentSiteId"
                optionLabel="name"
                isLoading={loadingSite}
                isDisabled={loadingSite}
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
                  errorText={errors.town?.message}
                  id="Town"
                  placeholder="Text"
                  label="Town"
                  {...register('town')}
                />
                <CustomInput
                  errorText={errors.area?.message}
                  id="Area"
                  placeholder="Area"
                  label="Area"
                  {...register('area')}
                /> 
              </InputContainer>
              <InputContainer title="">
                <CustomInput
                  errorText={errors.address?.message}
                  id="Address"
                  placeholder="Add address"
                  label="Address"
                  required
                  {...register('address')}
                />
                
              </InputContainer>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(CreateSite);
