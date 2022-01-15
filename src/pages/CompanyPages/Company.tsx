import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListCompany from './ListCompany';
import CreateCompany from './CreateCompany';
import EditCompany from './EditCompany';

interface CompaniesProps {}

const Company: React.FC<CompaniesProps> = () => {
  return (
    <>
      <Routes>
        <Route index element={<ListCompany />} />
        <Route path="newCompany" element={<CreateCompany />} />
        <Route path=":CompanyID" element={<EditCompany />} />
      </Routes>
    </>
  );
};
export default Company;
