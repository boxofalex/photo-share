import {
  LOGIN_USER,
  LOGIN_USER_SUCCESSFULL,
  LOGIN_USER_FAIL,
  REGISTER_USER,
  REGISTER_USER_SUCCESSFULL,
  REGISTER_USER_FAIL,
  FETCH_USER,
  FETCH_USER_SUCCESSFULL,
  FETCH_USER_FAIL,
  FETCH_USERS,
  FETCH_USERS_SUCCESSFULL,
  FETCH_USERS_FAIL,
  LOGOUT_USER,
} from "./constants";

import { CLOSE_SIGN_FORM, CLOSE_REGISTER_FORM, OPEN_SIGN_FORM } from "store/ui/constants";

export const loginUser = (login, password) => async (dispatch, getState, api) => {
  dispatch({ type: LOGIN_USER });
  try {
    const response = await api.post(`/user/login`, { login, password }).then(res => res.data);
    dispatch({ type: LOGIN_USER_SUCCESSFULL, payload: response.data });
    dispatch({ type: CLOSE_SIGN_FORM });
  } catch (err) {
    dispatch({ type: LOGIN_USER_FAIL });
  }
};

export const registerUser = (login, password) => async (dispatch, getState, api) => {
  dispatch({ type: REGISTER_USER });
  try {
    const response = await api.post(`/user/register`, { login, password }).then(res => res.data);
    dispatch({ type: REGISTER_USER_SUCCESSFULL, payload: response.data });
    dispatch({ type: CLOSE_REGISTER_FORM });
    dispatch({ type: OPEN_SIGN_FORM });
  } catch (err) {
    dispatch({ type: REGISTER_USER_FAIL });
  }
};

export const logoutUser = () => async (dispatch, getState, api) => {
  dispatch({ type: LOGOUT_USER });
};

export const fetchUser = userId => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_USER });
  try {
    const response = await api.get(`/user/${userId}`);
    if (response.status === 200) {
      dispatch({ type: FETCH_USER_SUCCESSFULL, payload: response.data.data.user });
    }
  } catch (err) {
    dispatch({ type: FETCH_USER_FAIL });
  }
};

export const fetchUsers = () => async (dispatch, getState, api) => {
  dispatch({ type: FETCH_USERS });
  try {
    const response = await api.get(`/user`);
    if (response.status === 200) {
      dispatch({ type: FETCH_USERS_SUCCESSFULL, payload: response.data.data.users });
    }
  } catch (err) {
    dispatch({ type: FETCH_USERS_FAIL });
  }
};
