import React, { memo } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

interface MainTemplateProps {}

const MainTemplate: React.FC<MainTemplateProps> = () => {
  return (
    <>
      <Sidebar />
      <Header />
    </>
  );
};
export default memo(MainTemplate);
