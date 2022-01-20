import React, {useEffect} from 'react';
import { CustomInput, CustomSelect, Form } from '@UiKitComponents';
import { Department, NewDepartment, PutDepartment, DepartmentState } from '@Types/department.types';
import { RootState } from '@RootStateType';
import { HeaderSaveAction, InputContainer } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { updateDepartment, GetDepartmentList } from '@Actions/department.action';
import { schemaDepartment } from '@schema/department';

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

  const onSubmit = (department: NewDepartment) => {
    const newDepartment: PutDepartment = {
      ...department,
      departmentId: currentDepartment.departmentId,
    };
    dispatch(updateDepartment(newDepartment));
  };

  useEffect(() => {
    if (!departmentList.length) {
      dispatch(GetDepartmentList());
    }
  }, [departmentList]);

  return (
    <>
      <Form<NewDepartment> onSubmit={onSubmit} yupSchema={schemaDepartment}>
        {({ register, formState: { errors }, control }) => (
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
        )}
      </Form>
    </>
  );
};
export default Edit;
