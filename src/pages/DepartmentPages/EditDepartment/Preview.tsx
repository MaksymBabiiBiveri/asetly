import React from 'react';
import { InputContainer, PreviewField } from '@components';
import { Department } from '@Types/department.types';

interface PreviewProps {
  currentDepartment: Department;
}

const Preview: React.FC<PreviewProps> = (props) => {
  const { currentDepartment } = props;
  console.log(currentDepartment);
  
  
  return (
    <div className="form_box">
      <InputContainer title="">
        <PreviewField label="Department name" description={currentDepartment.name} />
        <PreviewField
          label="Parent Department"
          description={currentDepartment.parentDepartmentId}
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
