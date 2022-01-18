import React, { useState } from 'react';
import classes from './CreateContract.module.scss';
import { CustomFileInput, CustomInput, Form } from '@UiKitComponents';
import { NewContract } from '@Types/contract.types';
import { HeaderSaveAction, InputContainer } from '@components';

interface CreateContractProps {}

const CreateContract: React.FC<CreateContractProps> = () => {
  const [file, setFile] = useState<any>();
  console.log(file);
  const onSubmit = (value: NewContract) => {
    console.log(value);
  };

  return (
    <div className={classes.createContract}>
      <div className={classes.createContract_wrapper}>
        <Form<NewContract> onSubmit={onSubmit}>
          {({ register }) => (
            <>
              <HeaderSaveAction title="New Contract" />
              <div className={classes.form_box}>
                <InputContainer title="Summary">
                  <CustomInput
                    label="Contract Code"
                    id="contractCode"
                    placeholder="Contract Code"
                    required
                    {...register('contractCode')}
                  />
                  <CustomInput
                    label="Vendor"
                    id="partnerId"
                    placeholder="Vendor Company"
                    required
                    {...register('partnerId')}
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
                  <CustomFileInput
                    value={file}
                    setValue={setFile}
                    {...register('contractFile')}
                  />
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
