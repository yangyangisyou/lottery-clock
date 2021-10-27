import {
  put,
  takeEvery,
  call,
  fork,
  cancelled,
  take,
  cancel,
} from "redux-saga/effects";
import { updateTimes, drawMember, updateUsers } from "../actions/clock";
import { countdown } from "../../utils/clock";

function* countdownTimes(seconds) {
  let countedSeconds = seconds;
  const countdownTask = yield call(countdown, countedSeconds);

  // initial seconds
  yield put(updateTimes(countedSeconds));
  try {
    while (true) {
      countedSeconds = yield take(countdownTask);
      yield put(updateTimes(countedSeconds));
    }
  } finally {
    if (countedSeconds === 0) {
      yield put(drawMember());
    }
    if (yield cancelled()) {
      countdownTask.close();
    }
  }
}

function* loadUsers() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = yield response.json();
    yield put(updateUsers(users));
  } catch (error) {
    yield put(updateUsersFailed(error));
  }
}

function* setTimes(action) {
  const { seconds } = action.payload;
  const countDownTask = yield fork(countdownTimes, seconds);
  // If SET_TIMES called before finished, cancel current task.
  yield take("SET_TIMES");
  yield cancel(countDownTask);
}

function* clockSaga() {
  yield takeEvery("SET_TIMES", setTimes);
  yield takeEvery("LOAD_USERS", loadUsers);
}

export default clockSaga;
