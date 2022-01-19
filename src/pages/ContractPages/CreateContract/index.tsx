import React, { useEffect } from 'react';
import classes from './CreateContract.module.scss';
import {
  CustomFileInput,
  CustomInput,
  CustomSelect,
  Form,
} from '@UiKitComponents';
import { NewContract } from '@Types/contract.types';
import { HeaderSaveAction, InputContainer } from '@components';
import { RootState } from '@RootStateType';
import { useDispatch, useSelector } from 'react-redux';
import { GetVendorList } from '@Actions/vendor.action';

interface CreateContractProps {}

const getVendorList = (state: RootState) => state.VendorReducer.vendorList;

const CreateContract: React.FC<CreateContractProps> = () => {
  const vendorList = useSelector(getVendorList);
  const dispatch = useDispatch();

  const onSubmit = (value: NewContract) => {
    console.log(value);
  };

  useEffect(() => {
    if (!vendorList.length) {
      dispatch(GetVendorList());
    }
  }, []);

  return (
    <div>
      <div className="padding_wrapper_page">
        <Form<NewContract> onSubmit={onSubmit}>
          {({ register, control }) => (
            <>
              <HeaderSaveAction title="New Contract" />
              <div className="form_box">
                <InputContainer title="Summary">
                  <CustomInput
                    label="Contract Code"
                    id="contractCode"
                    placeholder="Contract Code"
                    required
                    {...register('contractCode')}
                  />
                  <CustomSelect
                    label="Vendor"
                    id="partnerId"
                    name="partnerId"
                    control={control}
                    mappingOptions={vendorList}
                    optionValue="partnerId"
                    optionLabel="name"
                    required
                  />
                  <CustomInput
                    label="Contract No"
                    id="no"
                    placeholder="Contract No"
                    required
                    {...register('no')}
                  />
                  <CustomInput
                    label="Contract Name"
                    id="name"
                    placeholder="Contract Name"
                    required
                    {...register('name')}
                  />
                  <div className={classes.group_input}>
                    <CustomInput
                      label="Contract Start Date"
                      id="startDate"
                      placeholder="12/00/0000"
                      required
                      {...register('startDate')}
                    />
                    <CustomInput
                      label="Contract End Date"
                      id="endDate"
                      placeholder="12/00/0000"
                      required
                      {...register('endDate')}
                    />
                  </div>
                  <CustomFileInput {...register('contractFile')} />
                </InputContainer>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};

export default CreateContract;
