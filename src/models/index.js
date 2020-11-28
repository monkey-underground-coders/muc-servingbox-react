import { combineReducers } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";

import authReducer from "./auth/slice";
import authSagas from "./auth/sagas";

export const rootReducer = combineReducers({
  auth: authReducer,
});

export default function* rootSaga() {
  yield all([authSagas()]);
}
