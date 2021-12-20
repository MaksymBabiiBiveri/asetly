import React from 'react';
import CreateNewCompany from '../../components/CreateNewCompany';

interface NewCompanyProps {}

const NewCompany: React.FC<NewCompanyProps> = () => {
  return (
    <div>
      <CreateNewCompany />
    </div>
  );
};

export default NewCompany;
