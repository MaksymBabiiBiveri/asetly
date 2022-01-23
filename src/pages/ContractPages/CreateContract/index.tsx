import React, { useEffect } from 'react';
import classes from './CreateContract.module.scss';
import {
  CustomFileInput,
  CustomInput,
  CustomSelect,
  Form,
} from '@UiKitComponents';
import { TFormCreateContract } from '@Types/contract.types';
import { HeaderSaveAction, InputContainer } from '@components';
import { RootState } from '@RootStateType';
import { useDispatch, useSelector } from 'react-redux';
import { GetVendorList } from '@Actions/vendor.action';
import { getCurrencyList } from '@Actions/currency.action';
import { schemaContract } from '@schema/contract';
import { useBackHistory } from '@hooks';
// import { postNewContract } from '@Actions/contracts.action';

interface CreateContractProps {}

const getVendorState = (state: RootState) => state.VendorReducer;
const getCurrencyState = (state: RootState) => state.CurrencyReducer;

const CreateContract: React.FC<CreateContractProps> = () => {
  const { vendorList, loadingVendor } = useSelector(getVendorState);
  const { currencyList, loadingCurrency } = useSelector(getCurrencyState);
  const backHistory = useBackHistory();
  const dispatch = useDispatch();

  const onSubmit = (contract: TFormCreateContract) => {
    console.log(contract);
    contract.endDate = new Date(contract.endDate).toISOString();
    contract.startDate = new Date(contract.startDate).toISOString();

    // dispatch(postNewContract(contract));
  };

  useEffect(() => {
    if (!vendorList.length) {
      dispatch(GetVendorList());
    }
    if (!currencyList.length) {
      dispatch(getCurrencyList());
    }
  }, []);

  return (
    <div>
      <div className="padding_wrapper_page">
        <Form<TFormCreateContract>
          onSubmit={onSubmit}
          yupSchema={schemaContract}
        >
          {({ register, control, formState: { errors }, setValue }) => (
            <>
              {console.log(errors)}
              <HeaderSaveAction
                title="New Contract"
                onCancelButton={backHistory}
              />
              <div className="form_box">
                <InputContainer title="Summary">
                  <CustomInput
                    errorText={errors.contractCode?.message}
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
                    placeholder="Chose partner"
                    options={vendorList}
                    optionValue="partnerId"
                    optionLabel="name"
                    required
                    isLoading={loadingVendor}
                    isDisabled={loadingVendor}
                    setValue={setValue}
                  />

                  <CustomInput
                    errorText={errors.no?.message}
                    label="Contract No"
                    id="no"
                    placeholder="Contract No"
                    required
                    {...register('no')}
                  />

                  <CustomInput
                    errorText={errors.name?.message}
                    label="Contract Name"
                    id="name"
                    placeholder="Contract Name"
                    required
                    {...register('name')}
                  />
                  <div className={classes.group_input_price}>
                    <CustomInput
                      errorText={errors.price?.message}
                      label="Agreement Price"
                      id="price"
                      placeholder="0,00"
                      required
                      {...register('price')}
                    />
                    <CustomSelect
                      label=""
                      id="currency"
                      name="currencyId"
                      control={control}
                      options={currencyList}
                      optionValue="currencyId"
                      optionLabel="symbol"
                      isDisabled={loadingCurrency}
                    />
                  </div>
                  <div className={classes.group_input}>
                    <CustomInput
                      errorText={errors.startDate?.message}
                      label="Contract Start Date"
                      id="startDate"
                      placeholder="0000-00-12"
                      required
                      {...register('startDate')}
                    />
                    <CustomInput
                      errorText={errors.endDate?.message}
                      label="Contract End Date"
                      id="endDate"
                      placeholder="0000-00-12"
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
