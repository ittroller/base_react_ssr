import { SET_USER, LOGIN, LOGOUT, REGISTER, GET_USER } from './auth.types';

const setUser = user => ({ type: SET_USER, user });
const getUser = user => ({ type: GET_USER, user });
const login = data => ({ type: LOGIN, data });
const register = data => ({ type: REGISTER, data });
const logout = data => ({ type: LOGOUT, data });

export { setUser, login, logout, register, getUser };
