import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import SwitchRouter from './router/SwitchRouter';
import { CustomMessageValidate } from './utils';

import { store } from './store';
import i18n from './config/locale/i18n';

import 'antd/dist/antd.css';
import './assets/cssLibs/ReactToastify.min.css';
import './assets/scss/styles.scss';

const App = () => {
  const { warn } = console;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].startsWith('async-validator:')) return;

    warn(...args);
  };

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <CustomMessageValidate>
          <SwitchRouter />
        </CustomMessageValidate>

        <ToastContainer />
      </I18nextProvider>
    </Provider>
  );
};

export default App;
