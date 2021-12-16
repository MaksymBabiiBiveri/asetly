import React from 'react';
import './styles/global.scss';
import { Companies } from '@pages/Companies';
import { MainTemplate } from '@components';

function App() {
  return (
    <div className="container">
      <div className="main_wrapper">
        <MainTemplate />
        <div className="contents">
          <Companies />
        </div>
      </div>
    </div>
  );
}

export default App;
