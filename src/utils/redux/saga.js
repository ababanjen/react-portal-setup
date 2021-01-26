import { all, fork } from "redux-saga/effects";
import layouts from "@layouts/redux/saga";
import UserPages from "@pages/User/redux/saga";

function* rootSaga() {
  yield all([layouts].map(fork));
  yield all([UserPages].map(fork));
}

export default rootSaga;
