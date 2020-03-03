import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import { menusDidFetch, menusFetchFail } from './menus.actions';

import menusActionTypes from './menus.types';

export function* menusFetchAsync() {
  try {
    const url = `http://dziopak-cms.hol.es/api/menus`;
    const ref = yield axios({
      url,
      method: 'get'
    });
    const { data } = ref.data;
    yield put(menusDidFetch(data));
  } catch (err) {
    yield put(menusFetchFail(err.message));
  }
}

export function* fetchMenusStart() {
  yield takeLatest(menusActionTypes.MENUS_FETCH, menusFetchAsync);
}