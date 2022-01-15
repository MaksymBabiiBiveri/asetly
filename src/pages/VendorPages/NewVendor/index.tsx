import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './NewVendor.module.scss';
import { RootState } from '@RootStateType';
import { getCitiesList } from '@Actions/definition.action';
import { InputBase, Form, Divider } from '@UiKitComponents';
import { NewVendorType } from '@Types/vendor.types';
import { postNewVendor } from '@Actions/vendor.action';
import { Loader } from '@common';
import { useBackHistory } from '@hooks';
import { schemaVendor } from '@schema/vendor';
import { HeaderSaveAction, InputContainer } from '@components';

interface NewVendorProps {}

const getDefinitionState = (state: RootState) => 
  state.DefinitionReducer;
const getLoadingVendor = (state: RootState) => 
  state.VendorReducer.loadingVendor;

  const NewVendor: React.FC<NewVendorProps> = () => {
    const { citiesList, loadingDefinition } = useSelector(getDefinitionState);
    const loadingVendor = useSelector(getLoadingVendor);
    const dispatch = useDispatch();
    const backHistory = useBackHistory();
  
  const onSubmit = (newVendor: NewVendorType) => {
    dispatch(postNewVendor(newVendor));
    console.log(newVendor);
    
  };

  useEffect(() => {
    if (!citiesList.length && !loadingDefinition) {
      dispatch(getCitiesList());
    }
  }, []);

  if (loadingVendor || loadingDefinition) {
    return <Loader />;
  }

  return (
    <div className={classes.newVendor}>
      <div className={classes.newVendor_wrapper}>
        <Form<NewVendorType> onSubmit={onSubmit} yupSchema={schemaVendor}>
          {({ register, formState: { errors } }) => (
            <>
              <HeaderSaveAction 
                title="New Vendor" 
                errors={errors}
                onCancelButton={backHistory} 
              />
              <div className={classes.form_box}>
                <InputContainer title="Summary">
                  <InputBase
                    errorText={errors.name?.message}
                    id="VendorName"
                    placeholder="Vendor name"
                    label="Vendor name"
                    required
                    {...register('name')}
                  />
                  <InputBase
                    errorText={errors.taxOffice?.message}
                    id="TaxOffice"
                    placeholder="Tax Office"
                    label="Tax Office"
                    {...register('taxOffice')}
                  />
                  <InputBase
                    errorText={errors.partnerCode?.message}
                    id="PartnerCode"
                    placeholder="Vendor code"
                    label="Vendor code"
                    required
                    {...register('partnerCode')}
                  />
                  <InputBase
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
                    <InputBase
                      errorText={errors.cityId?.message}
                      id="City"
                      placeholder="Choose city"
                      label="City"
                      type="number"
                      required
                      {...register('cityId', { valueAsNumber: true })}
                    />

                    <InputBase
                      errorText={errors.address?.message}
                      id="Address"
                      placeholder="Add address"
                      label="Address"
                      required
                      {...register('address')}
                    />
                  </InputContainer>
                  <InputContainer title="Contacts">
                    <InputBase
                      errorText={errors.email?.message}
                      id="Email"
                      placeholder="Email"
                      label="Email"
                      {...register('email')}
                    />
                    <InputBase
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

export default memo(NewVendor);