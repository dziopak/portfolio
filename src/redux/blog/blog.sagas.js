import axios from 'axios';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { postsDidFetch, postsFetchFail } from './blog.actions';
import { categoriesDidFetch, categoriesFetchFail } from './blog.actions';

import blogActionTypes from './blog.types';

export function* postsFetchAsync() {
  try {
    const url = `http://dziopak-cms.hol.es/api/posts`;
    const ref = yield axios({
      url,
      method: 'get'
    });
    const { data } = ref.data;
    yield put(postsDidFetch(data));
  } catch (err) {
    yield put(postsFetchFail(err.message));
  }
}

export function* fetchPostsStart() {
  yield takeLatest(blogActionTypes.POSTS_FETCH, postsFetchAsync);
}

export function* categoriesFetchAsync() {
  try {
    const url = `http://dziopak-cms.hol.es/api/postcategories`;
    const ref = yield axios({
      url,
      method: 'get'
    });
    const { data } = ref.data;
    yield put(categoriesDidFetch(data));
  } catch (err) {
    yield put(categoriesFetchFail(err.message));
  }
}

export function* fetchCategoriesStart() {
  yield takeLatest(blogActionTypes.CATEGORIES_FETCH, categoriesFetchAsync);
}

export function* blogSagas() {
  yield all([
    call(fetchCategoriesStart),
    call(fetchPostsStart)
  ]);
}