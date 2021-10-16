import { all } from "redux-saga/effects";
import clockSaga from "./clockSaga";

export default function* rootSaga() {
  yield all([clockSaga()]);
}
