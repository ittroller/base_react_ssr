import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AboutComponent } from '../pages';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);
