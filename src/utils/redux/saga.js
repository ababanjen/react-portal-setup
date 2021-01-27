import { all, fork } from "redux-saga/effects";
import layouts from "@layouts/user/redux/saga";

function* rootSaga() {
  yield all([layouts].map(fork));
}

export default rootSaga;
