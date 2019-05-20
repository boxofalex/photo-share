import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
  state: () => ({}),
});

const store = createStore(
  reducer,
  compose(
    middleware,
    reduxDevTools,
  ),
);

export default store;
