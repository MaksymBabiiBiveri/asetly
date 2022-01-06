import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CompanyList from '@pages/CompanyPages/CompanyList';
import NewCompany from '@pages/CompanyPages/NewCompany';
import EditCompany from '@pages/CompanyPages/EditCompany';

interface CompaniesProps {}

const Company: React.FC<CompaniesProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="newCompany" element={<NewCompany />} />
        <Route path=":idCompany" element={<EditCompany />} />
      </Routes>
    </>
  );
};
export default Company;
