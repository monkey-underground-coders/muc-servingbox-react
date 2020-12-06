import { put, takeEvery, call } from "redux-saga/effects";

import { actions } from "./slice";
import { liveLessonsPageRequest } from "api/index";
import { getLocalStorage } from "utils/localStorage";

export function* liveLessonsPageSaga({ payload }) {
  try {
    const accessToken = getLocalStorage("access");
    const response = yield call(liveLessonsPageRequest, {
      params: payload,
      token: accessToken,
    });
    yield put({
      type: actions.liveLessonsPageSuccess,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: actions.liveLessonsPageFailure,
    });
  }
}

function* liveLessonsSagas() {
  yield takeEvery(actions.liveLessonsPageRequest, liveLessonsPageSaga);
}
export default liveLessonsSagas;
