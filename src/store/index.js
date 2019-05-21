import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import api from "config/api";
import thunk from "redux-thunk";
import { userReducer } from "./user";
import { uiReducer } from "./ui";
import { photosReducer } from "./photos";

const middleware = applyMiddleware(thunk.withExtraArgument(api));

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  photos: photosReducer,
});

const store = createStore(
  reducer,
  compose(
    middleware,
    reduxDevTools,
  ),
);

export default store;
