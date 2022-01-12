import React from 'react';
import classes from './EditCompany.module.scss';
import { Divider, Form, InputBase } from '@UiKitComponents';
import { Company, NewCompany, PutCompany } from '@Types/company.types';
import { HeaderSaveAction, InputContainer } from '@components';
import { useDispatch } from 'react-redux';
import { updateCompany } from '@Actions/company.action';
import { schemaCompany } from '@schema/company';

interface EditProps {
  currentCompany: Company;
  backToPreview: (modeEdit: boolean) => void;
}

const Edit: React.FC<EditProps> = (props) => {
  const { currentCompany, backToPreview } = props;
  const dispatch = useDispatch();
  const onSubmit = (company: NewCompany) => {
    const newCompany: PutCompany = {
      ...company,
      companyId: currentCompany.companyId,
    };
    dispatch(updateCompany(newCompany));
  };
  return (
    <>
      <Form<NewCompany> onSubmit={onSubmit} yupSchema={schemaCompany}>
        {({ register, formState: { errors } }) => (
          <>
            <HeaderSaveAction
              title={currentCompany.name}
              errors={errors}
              onCancelButton={backToPreview}
            />
            <div className={classes.content_box}>
              <InputContainer title="Summary">
                <InputBase
                  errorText={errors.name?.message}
                  id="CompanyName"
                  placeholder="Company name"
                  label="Company name"
                  defaultValue={currentCompany.name}
                  statusActive
                  {...register('name')}
                />

                <InputBase
                  errorText={errors.taxOffice?.message}
                  id="TaxOffice"
                  placeholder="Tax Office"
                  label="Tax Office"
                  defaultValue={currentCompany.taxOffice}
                  statusActive
                  {...register('taxOffice')}
                />

                <InputBase
                  errorText={errors.companyCode?.message}
                  id="CompanyCode"
                  placeholder="Company code"
                  label="Company code"
                  defaultValue={currentCompany.companyCode}
                  statusActive
                  {...register('companyCode')}
                />
                <InputBase
                  errorText={errors.taxNumber?.message}
                  id="TXN"
                  placeholder="TXN"
                  label="TXN"
                  defaultValue={currentCompany.taxNumber}
                  statusActive
                  {...register('taxNumber', { valueAsNumber: true })}
                />
              </InputContainer>
              <Divider margin="40px 0 20px 0" />
              <div className="markup_helper-box">
                <InputContainer title="Location">
                  <InputBase
                    errorText={errors.cityId?.message}
                    id="City"
                    placeholder="Choose city"
                    label="City"
                    type="number"
                    defaultValue={currentCompany.cityId}
                    statusActive
                    {...register('cityId', { valueAsNumber: true })}
                  />

                  <InputBase
                    errorText={errors.address?.message}
                    id="Address"
                    placeholder="Add address"
                    label="Address"
                    defaultValue={currentCompany.address}
                    statusActive
                    {...register('address')}
                  />
                </InputContainer>
                <InputContainer title="Contacts">
                  <InputBase
                    errorText={errors.contactName?.message}
                    id="Email"
                    placeholder="Email"
                    label="Email"
                    defaultValue={currentCompany.contactName}
                    statusActive
                    {...register('contactName')}
                  />
                  <InputBase
                    errorText={errors.phone?.message}
                    id="PhoneNumber"
                    placeholder="Phone number"
                    label="Phone number"
                    defaultValue={currentCompany.phone}
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