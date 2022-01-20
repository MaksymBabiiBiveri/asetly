import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@RootStateType';
import { Form, CustomInput, CustomSelect } from '@UiKitComponents';
import { NewDepartment, DepartmentState } from '@Types/department.types';
import { postNewDepartment, GetDepartmentList } from '@Actions/department.action';
import { Loader } from '@common';
import { HeaderSaveAction, InputContainer } from '@components';
import { useBackHistory } from '@hooks';
import { schemaDepartment } from '@schema/department';

interface CreateDepartmentProps {}

const getDepartmentState = (state: RootState) => state.DepartmentReducer;

const CreateDepartment: React.FC<CreateDepartmentProps> = () => {
  const { departmentList, loadingDepartment } = useSelector<RootState, DepartmentState>(
    getDepartmentState
  );
  const dispatch = useDispatch();
  const backHistory = useBackHistory();

  const onSubmit = (newDepartment: NewDepartment) => {
    dispatch(postNewDepartment(newDepartment));
  };

  useEffect(() => {
    if (!departmentList.length) {
      dispatch(GetDepartmentList());
    }
  }, [departmentList]);

  if (loadingDepartment) {
    return <Loader />;
  }

  return (
    <div>
      <div className="padding_wrapper_page">
        <Form<NewDepartment> onSubmit={onSubmit} yupSchema={schemaDepartment}>
          {({ register, formState: { errors }, control }) => (
            <>
              <HeaderSaveAction
                title="New Department"
                errors={errors}
                onCancelButton={backHistory}
              />
              <div className="form_box">
                <InputContainer title=''>
                  <CustomInput
                    errorText={errors.name?.message}
                    id="DepartmentName"
                    placeholder="Department name"
                    label="Department Name"
                    required
                    {...register('name')}
                  />
                  <CustomSelect
                    errorText={errors.parentDepartmentId?.message}
                    label="Parent Department"
                    id="ParentDepartment"
                    name="parentDepartmentId"
                    control={control}
                    placeholder="Choose department"
                    mappingOptions={departmentList}
                    optionValue="departmentId"
                    optionLabel="name"
                    isDisabled={loadingDepartment}
                    isLoading={loadingDepartment}
                  />
                  <CustomInput
                    errorText={errors.departmentCode?.message}
                    id="DepartmentCode"
                    placeholder="Department code"
                    label="Department Code"
                    required
                    {...register('departmentCode')}
                  />
                  <CustomInput
                    errorText={errors.siteId?.message}
                    id="Location"
                    placeholder="Location"
                    label="Location"
                    {...register('siteId')}
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

export default memo(CreateDepartment);
