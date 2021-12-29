import React, { useEffect } from 'react';
import './styles/global.scss';

import { useDispatch } from 'react-redux';
import { GetToken } from './store/actions/application.action';
import { Route, Routes } from 'react-router-dom';
import Company from '@pages/Company';
import Vendors from '@pages/Vendors';
import { Header, Sidebar } from '@components';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      dispatch(GetToken());
    }
  }, []);

  return (
    <div className="container">
      <div className="app_wrapper">
        <Sidebar />
        <div className="content_wrapper">
          <Header />
          <section className="contents">
            <Routes>
              <Route path="companies/*" element={<Company />} />
              <Route path="vendors/*" element={<Vendors />} />
            </Routes>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
