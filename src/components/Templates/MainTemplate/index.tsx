import React from 'react';
import Sidebar from '@component/Templates/Sidebar';
import Header from '@component/Templates/Header';
// import classes from './MainTemplate.module.scss';

interface MainTemplateProps {}

const MainTemplate: React.FC<MainTemplateProps> = () => {
  return (
    <>
      <Sidebar />
      <Header />
    </>
  );
};
export default MainTemplate;
