import {
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESSFULL,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESSFULL,
  FETCH_USER,
  FETCH_USER_SUCCESSFULL,
  FETCH_USER_FAIL,
  FETCH_USERS,
  FETCH_USERS_SUCCESSFULL,
  FETCH_USERS_FAIL,
  LOGOUT_USER,
} from "./constants";

const initState = {
  activeUserId: null,
  activeUserDetails: {},
  listOfUsers: [],
  selectedUser: null,
};

const userReducerMap = {
  [LOGIN_USER]: (state, action) => {
    return state;
  },
  [LOGIN_USER_SUCCESSFULL]: (state, action) => {
    return { ...state, activeUserId: action.payload.loggedUserId };
  },
  [LOGIN_USER_FAIL]: (state, action) => {
    return state;
  },
  [REGISTER_USER]: (state, action) => {
    return state;
  },
  [REGISTER_USER_SUCCESSFULL]: (state, action) => {
    return state;
  },
  [REGISTER_USER_FAIL]: (state, action) => {
    return state;
  },
  [FETCH_USER]: (state, action) => {
    return state;
  },
  [FETCH_USER_SUCCESSFULL]: (state, action) => {
    return { ...state, selectedUser: action.payload };
  },
  [FETCH_USER_FAIL]: (state, action) => {
    return { ...state, selectedUser: null };
  },
  [FETCH_USERS]: (state, action) => {
    return { ...state, selectedUser: null };
  },
  [FETCH_USERS_SUCCESSFULL]: (state, action) => {
    return { ...state, listOfUsers: action.payload };
  },
  [FETCH_USERS_FAIL]: (state, action) => {
    return { ...state, listOfUsers: [] };
  },
  [LOGOUT_USER]: (state, action) => {
    return { ...state, activeUserId: null, activeUserDetails: {} };
  },
};

const userReducer = (state = initState, action) => {
  const reducer = userReducerMap[action.type];
  if (!reducer) {
    return state;
  }
  return reducer(state, action);
};

export default userReducer;
