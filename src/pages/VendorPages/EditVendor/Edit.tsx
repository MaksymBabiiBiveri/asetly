import React from 'react';
import classes from './EditVendor.module.scss';
import { Divider, Form, InputBase } from '@UiKitComponents';
import { VendorTypes, NewVendorType, PutVendor } from '@Types/vendor.types';
import { HeaderSaveAction, InputContainer } from '@components';
import { useDispatch } from 'react-redux';
import { updateVendor } from '@Actions/vendor.action';
import { schemaVendor } from '@schema/vendor';

interface EditProps {
  currentVendor: VendorTypes;
  backToPreview: (modeEdit: boolean) => void;
}

const Edit: React.FC<EditProps> = (props) => {
  const { currentVendor, backToPreview } = props;
  const dispatch = useDispatch();
  const onSubmit = (vendor: NewVendorType) => {
    const NewVendor: PutVendor = {
      ...vendor,
      partnerId: currentVendor.partnerId,
    };
    dispatch(updateVendor(NewVendor));
  };
  return (
    <>
      <Form<NewVendorType> onSubmit={onSubmit} yupSchema={schemaVendor}>
      {({ register, formState: { errors } }) => (
        <>
          <HeaderSaveAction 
            title={currentVendor.name}
            errors={errors}
            onCancelButton={backToPreview} 
          />
          <div className={classes.form_box}>
            <InputContainer title="Summary">
              <InputBase
                errorText={errors.name?.message}
                id="VendorName"
                placeholder="Vendor name"
                label="Vendor name"
                defaultValue={currentVendor.name}
                statusActive
                {...register('name')}
              />
              <InputBase
                errorText={errors.taxOffice?.message}
                id="TaxOffice"
                placeholder="Tax Office"
                label="Tax Office"
                defaultValue={currentVendor.taxOffice}
                statusActive
                {...register('taxOffice')}
              />
              <InputBase
                errorText={errors.partnerCode?.message}
                id="PartnerCode"
                placeholder="Vendor code"
                label="Vendor code"
                defaultValue={currentVendor.partnerCode}
                statusActive
                {...register('partnerCode')}
              />
              <InputBase
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
            <div className='markup_helper-box'>
              <InputContainer title="Location">
                <InputBase
                  errorText={errors.cityId?.message}
                  id="City"
                  placeholder="Choose city"
                  label="City"
                  type="number"
                  defaultValue={currentVendor.cityId}
                  statusActive
                  {...register('cityId', { valueAsNumber: true })}
                />

                <InputBase
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
                <InputBase
                  errorText={errors.email?.message}
                  id="Email"
                  placeholder="Email"
                  label="Email"
                  defaultValue={currentVendor.email}
                  statusActive
                  {...register('email')}
                />
                <InputBase
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