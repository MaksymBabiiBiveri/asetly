import React, { useEffect } from 'react';
import './styles/global.scss';

import { useDispatch } from 'react-redux';
import { GetToken } from '@Actions/application.action';
import { Route, Routes } from 'react-router-dom';
import { Header, Sidebar } from '@components';
import { Loader } from '@common';

const Company = React.lazy(() => import('@pages/Company'));

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
            <React.Suspense fallback={<Loader />}>
              <Routes>
                <Route path="companies/*" element={<Company />} />
              </Routes>
            </React.Suspense>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
