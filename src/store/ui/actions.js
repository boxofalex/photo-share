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

const openSignInForm = () => ({ type: OPEN_SIGN_FORM });
const closeSignInForm = () => ({ type: CLOSE_SIGN_FORM });
const openRegisterForm = () => ({ type: OPEN_REGISTER_FORM });
const closeRegisterForm = () => ({ type: CLOSE_REGISTER_FORM });
const openAddCategoryForm = () => ({ type: OPEN_ADD_CATEGORY_FORM });
const closeAddCategoryForm = () => ({ type: CLOSE_ADD_CATEGORY_FORM });
const openAddImageForm = () => ({ type: OPEN_ADD_IMAGE_FORM });
const closeAddImageForm = () => ({ type: CLOSE_ADD_IMAGE_FORM });

export {
  openSignInForm,
  closeSignInForm,
  openRegisterForm,
  closeRegisterForm,
  openAddCategoryForm,
  closeAddCategoryForm,
  openAddImageForm,
  closeAddImageForm,
};
