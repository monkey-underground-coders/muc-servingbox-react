import { put, takeEvery, call } from "redux-saga/effects";

import * as api from "api";
import { actions } from "./slice";
import { generatebase64 } from "utils/genBase64";
import { setLocalStorage } from "utils/localStorage";

export function* fetchTokens(action) {
  const encodedData = generatebase64(action.payload.data);

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

function* authSagas() {
  yield takeEvery(actions.getTokens, fetchTokens);
}

export default authSagas;
