import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Register = props => {
  const [email, setEmail] = useState('ittroller2@gmail.com');
  const [password, setPassword] = useState('abc123');

  const redirectTo = () => {
    props.history.push('/login');
  };

  const onRegister = event => {
    event.preventDefault();
    props.register({ email, password, redirectTo });
  };

  return (
    <div className="auth-form">
      <h3>Register</h3>
      <form onSubmit={e => onRegister(e)}>
        <div>
          <p>Email</p>
          <input placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func,
  history: PropTypes.instanceOf(Object),
};

export default Register;
