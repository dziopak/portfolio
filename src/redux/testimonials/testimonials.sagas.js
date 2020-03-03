import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import { testimonialsDidFetch, testimonialsFetchFail } from './testimonials.actions';

import testimonialsActionTypes from './testimonials.types';

export function* testimonialsFetchAsync() {
  try {
    const url = `http://dziopak-cms.hol.es/api/testimonials`;
    const ref = yield axios({
      url,
      method: 'get'
    });
    const { data } = ref.data;
    yield put(testimonialsDidFetch(data));
  } catch (err) {
    yield put(testimonialsFetchFail(err.message));
  }
}

export function* fetchTestimonialsStart() {
  yield takeLatest(testimonialsActionTypes.TESTIMONIALS_FETCH, testimonialsFetchAsync);
}