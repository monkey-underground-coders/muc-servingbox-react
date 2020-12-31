import { put, takeEvery, call } from "redux-saga/effects";

import * as api from "api";
import { actions } from "./slice";
import { generatebase64 } from "utils/genBase64";
import { getLocalStorage, setLocalStorage } from "utils/localStorage";

export function* fetchTokensSaga({ payload }) {
  const encodedData = generatebase64(payload.data);

  try {
    const response = yield call(api.getTokens, encodedData);
    const tokens = response.data;
    yield put({
      type: actions.getTokensSuccess,
      payload: { tokens: response.data },
    });
    setLocalStorage("access", tokens.accessToken);
    setLocalStorage("refresh", tokens.refreshToken);
  } catch (err) {
    yield put({
      type: actions.getTokensFailed,
      payload: { err },
    });
  }
}

export function* getAccessSaga({ payload }) {
  try {
    const refreshToken = payload.refresh || getLocalStorage("refresh");
    const response = yield call(api.getAccess, refreshToken);
    yield put({
      type: actions.getAccessSuccess,
      payload: {
        tokens: response.data,
      },
    });
  } catch (err) {
    yield put({
      type: actions.getAccessFailure,
      payload: { err },
    });
  }
}

function* authSagas() {
  yield takeEvery(actions.getTokens, fetchTokensSaga);
  yield takeEvery(actions.getAccess, getAccessSaga);
}

export default authSagas;
