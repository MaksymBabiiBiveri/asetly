import React, { useState, useEffect, useMemo } from 'react';
import { Divider, CustomInput, CustomSelect } from '@UiKitComponents';
import { Site, TFormCreateSite, TUpdateSite, SiteState } from '@Types/site.types';
import { HeaderSaveAction, InputContainer } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { updateSite } from '@Actions/site.action';
import { schemaSite } from '@schema/site';
import { RootState } from '@RootStateType';
import { getCitiesList, getCountriesList } from '@Actions/definition.action';
import { GetSiteList } from '@Actions/site.action';
import { City } from '@Types/definition.types';
import { TSelectValue } from '@Types/application.types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface EditProps {
  currentSite: Site;
  backToPreview: (modeEdit: boolean) => void;
}

const getDefinitionState = (state: RootState) => state.DefinitionReducer;
const getSiteState = (state: RootState) => state.SiteReducer;

const Edit: React.FC<EditProps> = (props) => {
  const { currentSite, backToPreview } = props;
  const { loadingDefinition, countriesList, citiesList } = useSelector(getDefinitionState);
  const { siteList, loadingSite } = useSelector<RootState, SiteState>(
    getSiteState
  );
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = useForm<TFormCreateSite>({
    resolver: yupResolver(schemaSite),
  });
  const memoizedControl = useMemo(() => control, []);
  const countryDefaultValue = useMemo(
    () => ({
      value: currentSite.countryId,
      label: 'currentSite.country.name',
    }),
    []
  );
  const cityDefaultValue = useMemo(
    () => ({
      value: currentSite.cityId,
      label: 'currentSite.city.name',
    }),
    []
  );
  const parentDefaultValue = useMemo(
    () => ({
      value: currentSite.parentSiteId,
      label: 'currentSite.parentSite.name',
    }),
    []
  );  

  const [countryValue, setCountryValue] = useState<TSelectValue<number>>(countryDefaultValue);

  const getCountryValue = (country: TSelectValue<number>) => {
    setCountryValue(country);
  };

  const filterCitiesList = (): City[] => {
    return citiesList.filter((city) => city.countryId === countryValue.value);
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

  const onSubmit = (site: TFormCreateSite) => {
    const newSite: TUpdateSite = {
      ...site,
      siteId: currentSite.siteId,
      countryId: site.countryId.value,
      cityId: site.cityId.value,
      parentSiteId: site.parentSiteId.value,
    };
    
    dispatch(updateSite(newSite));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HeaderSaveAction title={currentSite.name} errors={errors} onCancelButton={backToPreview} />
        <div className="form_box">
        <InputContainer title="Summary">
              <CustomInput
                errorText={errors.name?.message}
                id="SiteName"
                placeholder="Site name"
                label="Site name"
                defaultValue={currentSite.name}
                statusActive
                {...register('name')}
              />
              <CustomInput
                errorText={errors.barcode?.message}
                id="SiteBarcode"
                placeholder="Site Barcode"
                label="Site Barcode"
                defaultValue={currentSite.barcode}
                statusActive
                {...register('barcode')}
              />
              <CustomInput
                errorText={errors.siteCode?.message}
                id="SiteCode"
                placeholder="Site code"
                label="Site code"
                defaultValue={currentSite.siteCode}
                statusActive
                {...register('siteCode')}
              />
              <CustomSelect
                label="Parent site"
                id="ParentSiteId"
                name="parentSiteId"
                control={memoizedControl}
                placeholder="Choose parent site"
                options={siteList}
                optionValue="siteId"
                optionLabel="name"
                isLoading={loadingSite}
                isDisabled={loadingSite}
                setValue={setValue}
                defaultValue={parentDefaultValue}
                statusActive
              />
            </InputContainer>
            <Divider margin="50px 0 30px 0" />
            <div className="markup_helper-box">
              <InputContainer title="Location">
                <CustomSelect
                  options={countriesList}
                  defaultValue={countryDefaultValue}
                  label="Country"
                  id="Country"
                  name="countryId"
                  control={memoizedControl}
                  placeholder="Choose country"
                  optionValue="countryId"
                  optionLabel="name"
                  isLoading={loadingDefinition}
                  isDisabled={loadingDefinition}
                  getSelectValue={getCountryValue}
                  setValue={setValue}
                  statusActive
                />
                <CustomSelect
                  options={filterCitiesList()}
                  defaultValue={cityDefaultValue}
                  name="cityId"
                  control={memoizedControl}
                  label="City"
                  id="City"
                  placeholder="Choose city"
                  optionValue="cityId"
                  optionLabel="name"
                  isLoading={loadingDefinition}
                  isDisabled={!filterCitiesList().length || loadingDefinition}
                  setValue={setValue}
                  statusActive
                />

                <CustomInput
                  errorText={errors.town?.message}
                  id="Town"
                  placeholder="Text"
                  label="Town"
                  defaultValue={currentSite.town}
                  statusActive
                  {...register('town')}
                />
                <CustomInput
                  errorText={errors.area?.message}
                  id="Area"
                  placeholder="Area"
                  label="Area"
                  defaultValue={currentSite.area}
                  statusActive
                  {...register('area')}
                /> 
              </InputContainer>
              <InputContainer title="">
                <CustomInput
                  errorText={errors.address?.message}
                  id="Address"
                  placeholder="Add address"
                  label="Address"
                  defaultValue={currentSite.address}
                  statusActive
                  {...register('address')}
                />
                
              </InputContainer>
          </div>
        </div>
      </form>
    </>
  );
};

export default Edit;
