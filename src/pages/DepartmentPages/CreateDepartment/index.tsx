import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@RootStateType';
import { CustomInput, CustomSelect } from '@UiKitComponents';
import { DepartmentState, TFormCreateDepartment } from '@Types/department.types';
import { GetDepartmentList } from '@Actions/department.action';
import { Loader } from '@common';
import { HeaderSaveAction, InputContainer } from '@components';
import { useBackHistory } from '@hooks';
import { schemaDepartment } from '@schema/department';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface CreateDepartmentProps {}

const getDepartmentState = (state: RootState) => state.DepartmentReducer;

const CreateDepartment: React.FC<CreateDepartmentProps> = () => {
  const { departmentList, loadingDepartment } = useSelector<RootState, DepartmentState>(
    getDepartmentState
  );
  const dispatch = useDispatch();
  const backHistory = useBackHistory();

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<TFormCreateDepartment>({
    resolver: yupResolver(schemaDepartment),
  });

  const memoizedControl = useMemo(() => control, []);

  const onSubmit = (department: TFormCreateDepartment) => {
    const newDepartmen = {
      ...department,
      parentDepartmentId: department.parentDepartmentId.value
    };
    console.log(newDepartmen);
    
    // dispatch(postNewDepartment(newDepartmen));
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    label="Parent Department"
                    id="ParentDepartment"
                    name="parentDepartmentId"
                    control={memoizedControl}
                    placeholder="Choose department"
                    options={departmentList}
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
        </form>
      </div>
    </div>
  );
};

export default memo(CreateDepartment);
