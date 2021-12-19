import React, { useEffect } from 'react';
import './styles/global.scss';
import { MainTemplate } from '@templates';
import { Companies } from '@pages/Companies';
import { useDispatch } from 'react-redux';
import { GetToken } from './store/actions/application.action';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetToken());
  }, []);
  return (
    <div className="container">
      <div className="main_wrapper">
        <MainTemplate />
        <section className="contents">
          <Companies />
        </section>
      </div>
    </div>
  );
}

export default App;
