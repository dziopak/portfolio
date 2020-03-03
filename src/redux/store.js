import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, all } from 'redux-saga/effects';

import logger from "redux-logger";

import rootReducer from "./root-reducer.js";
import { blogSagas } from "./blog/blog.sagas";
import { fetchMenusStart } from "./menus/menus.sagas";
import { fetchTestimonialsStart } from "./testimonials/testimonials.sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export function* rootSaga() {
    yield all([
      call(blogSagas),
      call(fetchMenusStart),
      call(fetchTestimonialsStart)
    ]);
  }

sagaMiddleware.run(rootSaga);


export default store;