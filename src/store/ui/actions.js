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

export const openSignInForm = () => ({ type: OPEN_SIGN_FORM });
export const closeSignInForm = () => ({ type: CLOSE_SIGN_FORM });
export const openRegisterForm = () => ({ type: OPEN_REGISTER_FORM });
export const closeRegisterForm = () => ({ type: CLOSE_REGISTER_FORM });
export const openAddCategoryForm = () => ({ type: OPEN_ADD_CATEGORY_FORM });
export const closeAddCategoryForm = () => ({ type: CLOSE_ADD_CATEGORY_FORM });
export const openAddImageForm = () => ({ type: OPEN_ADD_IMAGE_FORM });
export const closeAddImageForm = () => ({ type: CLOSE_ADD_IMAGE_FORM });
