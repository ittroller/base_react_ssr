import { combineReducers } from 'redux';

import { authReducer } from '../modules/authPage';

const rootReducer = () =>
  combineReducers({
    authReducer,
  });

export default rootReducer;
