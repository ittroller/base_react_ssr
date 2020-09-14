import { all } from 'redux-saga/effects';
import { authSaga } from '../modules/authPage';

export default function* rootSaga() {
  yield all([authSaga()]);
}
