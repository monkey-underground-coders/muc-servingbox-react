import { combineReducers } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

import authReducer from "./auth/slice";
import liveLessonsReducer from "./live_lessons/slice";
import authSagas from "./auth/sagas";
import liveLessonsSagas from "./live_lessons/sagas";

export const rootReducer = combineReducers({
  auth: authReducer,
  liveLessons: liveLessonsReducer,
});

export default function* rootSaga() {
  yield all([authSagas(), liveLessonsSagas()]);
}
