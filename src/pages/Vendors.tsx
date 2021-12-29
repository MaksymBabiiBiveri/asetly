import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VendorList from '@pages/VendorPages/VendorList';
import NewVendor from '@pages/VendorPages/NewVendor';

interface VendorsProps {}

const Vendors: React.FC<VendorsProps> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<VendorList />} />
        <Route path="NewVendor" element={<NewVendor />} />
      </Routes>
    </>
  );
};
export default Vendors;