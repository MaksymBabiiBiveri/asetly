import React, {useEffect} from 'react';
import { InputContainer, PreviewField } from '@components';
import { Department } from '@Types/department.types';
// import { GetParentDepartment } from '@Actions/department.action';
// import { dis } from '@Actions/dis.action';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '@RootStateType';

interface PreviewProps {
  currentDepartment: Department;
  parentName: string;
}

// const getDepartmentState = (state: RootState) => state.DepartmentReducer;

const Preview: React.FC<PreviewProps> = (props) => {
  const { currentDepartment, parentName } = props;
  // const dispatch = useDispatch();
  // const { parentDepartment } = useSelector(getDepartmentState);
  const parentId = currentDepartment.parentDepartmentId;

  useEffect(() => {
    if(parentId) {
      // dispatch(dis(parentId));
    }
  }, []);
  
  // console.log(parentDepartment);
  
  return (
    <div className="form_box">
      <InputContainer title="">
        <PreviewField label="Department name" description={currentDepartment.name} />
        <PreviewField
          label="Parent Department"
          description={parentId ? parentName : ''}
        />
        <PreviewField
          label="Department code"
          description={currentDepartment.departmentCode}
        />
        <PreviewField label="Location" description={currentDepartment.siteId} />
      </InputContainer>
    </div>
  );
};
export default Preview;
