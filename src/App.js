import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import SwitchRouter from './router/SwitchRouter';

import { store } from './store';
import i18n from './config/locale/i18n';

import './assets/cssLibs/ReactToastify.min.css';
import './assets/scss/styles.scss';

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <SwitchRouter />
        <ToastContainer />
      </I18nextProvider>
    </Provider>
  );
};

export default App;
