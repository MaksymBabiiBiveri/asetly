import React, { useEffect } from 'react';
import './styles/global.scss';

import { useDispatch } from 'react-redux';
import { GetToken } from './store/actions/application.action';
import { Route, Routes } from 'react-router-dom';
import { MainTemplate } from '@templates';
import Company from '@pages/Company';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      dispatch(GetToken());
    }
  }, []);

  return (
    <div className="container">
      <div className="main_wrapper">
        <MainTemplate />
        <section className="contents">
          <Routes>
            <Route path="companies/*" element={<Company />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
