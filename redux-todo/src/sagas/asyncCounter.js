import {
  takeEvery,
  takeLatest,
  takeLeading,
  put,
  all,
  delay
} from "redux-saga/effects";
import {
  INCREMENT,
  DECREMENT,
  INCREMENT_ASYNC,
  DECREMENT_ASYNC
} from "../actions/actionTypes";

/// watcher
function* helloSaga() {
  yield takeEvery(DECREMENT_ASYNC, asyncDecrement);
  console.log("Hello Sagas!");
}

function* watchCounter() {
  yield takeLeading(INCREMENT_ASYNC, asyncIncrement);
}

//TODO: call API with saga -----> watcher, worker, reducer .....

/// worker
function* asyncIncrement() {
  yield delay(1000); // fake async
  yield put({ type: INCREMENT, payload: 1 });
}

function* asyncDecrement() {
  yield put({ type: DECREMENT, payload: 1 });
}

export default function* rootSaga() {
  yield all([helloSaga(), watchCounter()]);
}
