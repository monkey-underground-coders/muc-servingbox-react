import { put, takeEvery, call } from "redux-saga/effects";

import * as api from "api";
import { actions } from "./slice";
import { generatebase64 } from "utils/genBase64";

export function* fetchTokens(action) {
  const encodedData = generatebase64(action.payload.data);

  try {
    const response = yield call(api.getTokens, encodedData);

    yield put({
      type: actions.getTokensSuccess,
      payload: { tokens: response.data },
    });
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
