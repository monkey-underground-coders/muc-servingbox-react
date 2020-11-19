// import { put, takeEvery, call } from "redux-saga/effects";

// import * as api from 'api';
// import { actions } from './slice';

// export function* fetchUsers() {
//   try {
//     const response = yield call(api.fetchUsers);
//     yield put({
//       type: actions.fetchUsersSuccess,
//       payload: { users: response.data },
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

function* testSagas() {
  // yield takeEvery(actions.fetchUser, fetchUsers);
}

export default testSagas;
