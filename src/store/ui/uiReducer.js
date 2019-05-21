import {
  OPEN_SIGN_FORM,
  CLOSE_SIGN_FORM,
  OPEN_REGISTER_FORM,
  CLOSE_REGISTER_FORM,
  OPEN_ADD_CATEGORY_FORM,
  CLOSE_ADD_CATEGORY_FORM,
  OPEN_ADD_IMAGE_FORM,
  CLOSE_ADD_IMAGE_FORM,
} from "./constants";

const initState = {
  isRegisterFormOpen: false,
  isSignInFormOpen: false,
  isAddCategoryFormOpen: false,
  isAddImageFormOpen: false,
};

const uiReducerMap = {
  [OPEN_SIGN_FORM]: (state, action) => {
    return { ...state, isSignInFormOpen: true };
  },
  [CLOSE_SIGN_FORM]: (state, action) => {
    return { ...state, isSignInFormOpen: false };
  },
  [OPEN_REGISTER_FORM]: (state, action) => {
    return { ...state, isRegisterFormOpen: true };
  },
  [CLOSE_REGISTER_FORM]: (state, action) => {
    return { ...state, isRegisterFormOpen: false };
  },
  [OPEN_ADD_CATEGORY_FORM]: (state, action) => {
    return { ...state, isAddCategoryFormOpen: true };
  },
  [CLOSE_ADD_CATEGORY_FORM]: (state, action) => {
    return { ...state, isAddCategoryFormOpen: false };
  },
  [OPEN_ADD_IMAGE_FORM]: (state, action) => {
    return { ...state, isAddImageFormOpen: true };
  },
  [CLOSE_ADD_IMAGE_FORM]: (state, action) => {
    return { ...state, isAddImageFormOpen: false };
  },
};

const userReducer = (state = initState, action) => {
  const reducer = uiReducerMap[action.type];
  if (!reducer) {
    return state;
  }
  return reducer(state, action);
};

export default userReducer;
