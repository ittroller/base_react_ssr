// import { RegisterContainer, LoginContainer } from './containers';
// import RegisterContainer from './containers/Auth.container';
// import LoginContainer from './containers/Auth.container';
import AuthContainer from './containers/Auth.container';
import authReducer from './auth.reducer';

export { AuthContainer };
export { authReducer };
export * from './auth.saga';
export * from './auth.action';
