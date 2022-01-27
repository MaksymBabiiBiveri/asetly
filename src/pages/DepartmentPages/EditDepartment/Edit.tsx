import React, {useEffect, useMemo} from 'react';
import { CustomInput, CustomSelect } from '@UiKitComponents';
import { Department, TFormCreateDepartment, DepartmentState } from '@Types/department.types';
import { RootState } from '@RootStateType';
import { HeaderSaveAction, InputContainer } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { updateDepartment, GetDepartmentList } from '@Actions/department.action';
import { schemaDepartment } from '@schema/department';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface EditProps {
  currentDepartment: Department;
  backToPreview: (modeEdit: boolean) => void;
}

const getDepartmentState = (state: RootState) => state.DepartmentReducer;

const Edit: React.FC<EditProps> = (props) => {
  const { currentDepartment, backToPreview } = props;
  const { departmentList, loadingDepartment } = useSelector<RootState, DepartmentState>(
    getDepartmentState
  );
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = useForm<TFormCreateDepartment>({
    resolver: yupResolver(schemaDepartment),
  });

  const memoizedControl = useMemo(() => control, []);
  const parentDefaultValue = useMemo(
    () => ({
      value: currentDepartment.parentDepartmentId,
      label: 'parentDepartment',
    }),
    []
  );

  useEffect(() => {
    if (!departmentList.length) {
      dispatch(GetDepartmentList());
    }
  }, [departmentList]);

  const onSubmit = (department: TFormCreateDepartment) => {
    const newDepartmen = {
      ...department,
      parentDepartmentId: department.parentDepartmentId.value,
      departmentId: currentDepartment.departmentId,
    };
    dispatch(updateDepartment(newDepartmen));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
          <>
            <HeaderSaveAction
              title={currentDepartment.name}
              errors={errors}
              onCancelButton={backToPreview}
            />
            <div className="form_box">
              <InputContainer title=''>
                <CustomInput
                  errorText={errors.name?.message}
                  id="DepartmentName"
                  placeholder="Department name"
                  label="Department Name"
                  defaultValue={currentDepartment.name}
                  statusActive
                  {...register('name')}
                />
                <CustomSelect
                  label="Parent Department"
                  id="ParentDepartment"
                  name="parentDepartmentId"
                  defaultValue={parentDefaultValue}
                  control={memoizedControl}
                  placeholder="Choose department"
                  options={departmentList}
                  optionValue="departmentId"
                  optionLabel="name"
                  setValue={setValue}
                  isDisabled={loadingDepartment}
                  isLoading={loadingDepartment}
                />
                <CustomInput
                  errorText={errors.departmentCode?.message}
                  id="DepartmentCode"
                  placeholder="Department code"
                  label="Department Code"
                  defaultValue={currentDepartment.departmentCode}
                  statusActive
                  {...register('departmentCode')}
                />
                <CustomInput
                  errorText={errors.siteId?.message}
                  id="Location"
                  placeholder="Location"
                  label="Location"
                  defaultValue={currentDepartment.siteId}
                  statusActive
                  {...register('siteId', { valueAsNumber: true })}
                />
                </InputContainer>
              </div>
          </>
      </form>
    </>
  );
};
export default Edit;
