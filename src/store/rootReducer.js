import { combineReducers } from 'redux';

import { authReducer } from '../modules/public/authPage';

const rootReducer = () =>
  combineReducers({
    authReducer,
  });

export default rootReducer;
