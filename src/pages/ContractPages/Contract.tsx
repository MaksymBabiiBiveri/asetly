import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListContracts from '@pages/ContractPages/ListContracts';
import CreateContract from '@pages/ContractPages/CreateContract';

const Contract: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<ListContracts />} />
        <Route path="newContract" element={<CreateContract />} />
      </Routes>
    </>
  );
};

export default Contract;
