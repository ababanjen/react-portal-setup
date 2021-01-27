import { all, fork } from "redux-saga/effects";
import layouts from "@layouts/redux/saga";
import pages from "@pages/User/redux/saga";

function* rootSaga() {
  yield all([layouts].map(fork));
  yield all([pages].map(fork));
}

export default rootSaga;
