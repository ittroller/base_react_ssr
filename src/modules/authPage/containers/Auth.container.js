import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../pages/Login.component';
import Register from '../pages/Register.component';

import { login, register } from '../auth.action';

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators({ login, register }, dispatch);

export default {
  LoginContainer: connect(mapStateToProps, mapDispatchToProps)(Login),
  RegisterContainer: connect(mapStateToProps, mapDispatchToProps)(Register),
};
