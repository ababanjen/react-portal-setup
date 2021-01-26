import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
function configureStore() {
  return createStore(
    rootReducer /* preloadedState, */,
    +window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
}

const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;
