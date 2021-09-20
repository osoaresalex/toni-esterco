import {all} from 'redux-saga/effects';
import HeroesSaga from './heroes/heroes-sagas';

export default function* rootSagas() {
  yield all([
    ...HeroesSaga,
  ]);
};
