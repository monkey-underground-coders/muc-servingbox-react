import { combineReducers } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

import testReducer from "./test/slice";
import testSagas from "./test/sagas";

export const rootReducer = combineReducers({
  test: testReducer,
});

export default function* rootSaga() {
  yield all([testSagas()]);
}
