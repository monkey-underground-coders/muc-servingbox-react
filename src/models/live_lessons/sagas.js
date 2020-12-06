import { put, takeEvery, call } from "redux-saga/effects";

import { actions } from "./slice";
import { liveLessonsPageRequest } from "api/index";

export function* liveLessonsPageSaga({ payload }) {
  try {
    const response = yield call(liveLessonsPageRequest);
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
