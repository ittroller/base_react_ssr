import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN, LOGOUT, REGISTER, SET_USER, GET_USER } from './auth.types';
import API from './auth.api';
import { Functional } from '../../../utils';
import { setUser } from './auth.action';

function* login(action) {
  try {
    const { history } = action.data;
    const user = yield call(API.login, {
      email: 'ittroller8@gmail.com',
      password: 'Minh-1995',
    });

    if (user) {
      localStorage.setItem('isLogin', 1);
      localStorage.setItem('token', user.token);
      localStorage.setItem('refresh_token', user.refresh_token);
      yield put({ type: SET_USER, user });
      yield history.push('/dashboard');
    }
  } catch (error) {
    const newError = yield call(Functional.generateMessage, error);
    console.log(newError);
  }
}

function* logout() {
  try {
    localStorage.setItem('isLogin', 0);
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    yield put(push('/login'));
  } catch (error) {
    console.log(error);
  }
}

function* register() {
  //   try {
  //     const { email, password, redirectTo } = action.data;
  //     yield call([firebase.auth(), firebase.auth().createUserWithEmailAndPassword], email, password);
  //     redirectTo();
  //   } catch (error) {
  //     console.log(error);
  //   }
}

function* handleGetUser() {
  try {
    const user = yield call(API.getUser, {});
    if (user) yield put(setUser(user));
  } catch (error) {
    const newError = yield call(Functional.generateMessage, error);
    console.log(newError);
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
  yield takeEvery(REGISTER, register);
  yield takeEvery(GET_USER, handleGetUser);
}
