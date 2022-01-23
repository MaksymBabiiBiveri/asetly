import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { ThemeProvider } from '@mui/material';
import theme from './theme/muiTheme';
import 'rsuite/dist/rsuite.min.css';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
