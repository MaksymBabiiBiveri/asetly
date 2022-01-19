import React, {useState, useEffect} from 'react';
import { Divider, Form, CustomInput, CustomSelect } from '@UiKitComponents';
import { Vendor, NewVendor, PutVendor } from '@Types/vendor.types';
import { HeaderSaveAction, InputContainer } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { updateVendor } from '@Actions/vendor.action';
import { schemaVendor } from '@schema/vendor';
import { RootState } from '@RootStateType';
import { getCitiesList, getCountriesList } from '@Actions/definition.action';
import { City } from '@Types/definition.types';

interface EditProps {
  currentVendor: Vendor;
  backToPreview: (modeEdit: boolean) => void;
}

const getDefinitionState = (state: RootState) => state.DefinitionReducer;

const Edit: React.FC<EditProps> = (props) => {
  const { currentVendor, backToPreview } = props;
  const { loadingDefinition, countriesList, citiesList } =
    useSelector(getDefinitionState);
  const dispatch = useDispatch();

  const [countryId, setCountryId] = useState<number | undefined | string>();

  const getCountryValue = (countryId: number | undefined | string) => {
    setCountryId(countryId ? countryId : currentVendor.city.countryId);
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

  const onSubmit = (vendor: NewVendor) => {
    const NewVendor: PutVendor = {
      ...vendor,
      partnerId: currentVendor.partnerId,
    };
    dispatch(updateVendor(NewVendor));
  };
  
  return (
    <>
      <Form<NewVendor> onSubmit={onSubmit} yupSchema={schemaVendor}>
      {({ register, formState: { errors }, control }) => (
        <>
          <HeaderSaveAction 
            title={currentVendor.name}
            errors={errors}
            onCancelButton={backToPreview} 
          />
          <div className='form_box'>
            <InputContainer title="Summary">
              <CustomInput
                errorText={errors.name?.message}
                id="VendorName"
                placeholder="Vendor name"
                label="Vendor name"
                defaultValue={currentVendor.name}
                statusActive
                {...register('name')}
              />
              <CustomInput
                errorText={errors.taxOffice?.message}
                id="TaxOffice"
                placeholder="Tax Office"
                label="Tax Office"
                defaultValue={currentVendor.taxOffice}
                statusActive
                {...register('taxOffice')}
              />
              <CustomInput
                errorText={errors.partnerCode?.message}
                id="PartnerCode"
                placeholder="Vendor code"
                label="Vendor code"
                defaultValue={currentVendor.partnerCode}
                statusActive
                {...register('partnerCode')}
              />
              <CustomInput
                errorText={errors.taxNumber?.message}
                id="TXN"
                placeholder="TXN"
                label="TXN"
                defaultValue={currentVendor.taxNumber}
                statusActive
                {...register('taxNumber', { valueAsNumber: true })}
              />
            </InputContainer>
            <Divider margin="40px 0 20px 0" />
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
                  isDisabled={loadingDefinition}
                  isLoading={loadingDefinition}
                  required
                />

                <CustomInput
                  errorText={errors.address?.message}
                  id="Address"
                  placeholder="Add address"
                  label="Address"
                  defaultValue={currentVendor.address}
                  statusActive
                  {...register('address')}
                />
              </InputContainer>
              <InputContainer title="Contacts">
                <CustomInput
                  errorText={errors.email?.message}
                  id="Email"
                  placeholder="Email"
                  label="Email"
                  defaultValue={currentVendor.email}
                  statusActive
                  {...register('email')}
                />
                <CustomInput
                  errorText={errors.phone?.message}
                  id="PhoneNumber"
                  placeholder="Phone number"
                  label="Phone number"
                  defaultValue={currentVendor.phone}
                  statusActive
                  {...register('phone')}
                />
              </InputContainer>
            </div>
          </div>
        </>
      )}
    </Form>
  </>
  );
};

export default Edit;