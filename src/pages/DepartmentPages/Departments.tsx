import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListDepartment from '@pages/DepartmentPages/ListDepartment';
import CreateDepartment from '@pages/DepartmentPages/CreateDepartment';
import EditDepartment from '@pages/DepartmentPages/EditDepartment'

interface DepartmentsProps {}

const Departments: React.FC<DepartmentsProps> = () => {
  return (
    <>
      <Routes>
        <Route index element={<ListDepartment />} />
        <Route path="NewDepartment" element={<CreateDepartment />} />
        <Route path=":DepartmentID" element={<EditDepartment />} />
      </Routes>
    </>
  );
};

export default Departments;