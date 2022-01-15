import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorList from '@pages/VendorPages/VendorList';
import NewVendor from '@pages/VendorPages/NewVendor';
import EditVendor from './EditVendor';

interface VendorsProps {}

const Vendors: React.FC<VendorsProps> = () => {
  return (
    <>
      <Routes>
        <Route index element={<VendorList />} />
        <Route path="NewVendor" element={<NewVendor />} />
        <Route path=":PartnerID" element={<EditVendor />} />
      </Routes>
    </>
  );
};
export default Vendors;