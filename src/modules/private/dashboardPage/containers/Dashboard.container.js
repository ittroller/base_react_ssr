import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import DashboardComponent from '../pages/Dashboard.component';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
