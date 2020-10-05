import { all } from 'redux-saga/effects';
import { authSaga } from '../modules/public/authPage';

export default function* rootSaga() {
  yield all([authSaga()]);
}
