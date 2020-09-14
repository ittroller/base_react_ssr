import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onCountUp, onCountDown } from '../app.action';
import { logout } from '../../authPage';

import AppComponent from '../pages/App.component';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onCountUp,
      onCountDown,
      logout,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
