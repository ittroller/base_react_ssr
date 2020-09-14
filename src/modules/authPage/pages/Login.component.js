import React, { useState } from 'react';
// import EventBus from 'eventing-bus';

import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

const options = [
  { value: 'en', label: 'English' },
  { value: 'vi', label: 'VietNam' },
];

const Login = props => {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = event => {
    event.preventDefault();
    props.login({ email, password });
  };

  const changeLang = language => {
    i18n.changeLanguage(language.value);
  };

  return (
    <div className="auth-form">
      <h3>
        Login {t('title')} {t('home')}
      </h3>
      <form onSubmit={e => onLogin(e)}>
        <div>
          <p>Email</p>
          <input placeholder="Enter email" value={email} name="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
      <button type="button" onClick={() => changeLang(options[0])}>
        EN
      </button>
      <button type="button" onClick={() => changeLang(options[1])}>
        VN
      </button>
    </div>
  );
};

export default withRouter(Login);
