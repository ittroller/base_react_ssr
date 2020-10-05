import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onCountUp, onCountDown } from '../app.action';
import { authAction } from '../../authPage';

import { HomeComponent } from '../pages';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onCountUp,
      onCountDown,
      logout: authAction.logout,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
