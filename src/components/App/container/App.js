import { connect } from "react-redux";
import { getActiveUserId } from "store/user/selectors";
import { loginUser, registerUser, logoutUser } from "store/user/actions";
import {
  getIsRegisterFormOpen,
  getIsAddImageFormOpen,
  getIsSignInFormOpen,
} from "store/ui/selectors";
import {
  openSignInForm,
  closeSignInForm,
  openRegisterForm,
  closeRegisterForm,
  openAddImageForm,
  closeAddImageForm,
} from "store/ui/actions";
import { photosActions, photosSelectors } from "store/photos";
import { getAvailableCategories } from "store/photos/selectors";
import { uploadPhoto } from "store/photos/actions";
import App from "../component/App";

const mapStateToProps = (state, ownProps) => {
  return {
    activeUserId: getActiveUserId(state.user),
    isRegisterFormOpen: getIsRegisterFormOpen(state.ui),
    isSignInFormOpen: getIsSignInFormOpen(state.ui),
    isAddImageFormOpen: getIsAddImageFormOpen(state.ui),
    availableCategories: getAvailableCategories(state.photos),
  };
};

export default connect(
  mapStateToProps,
  {
    loginUser,
    registerUser,
    logoutUser,
    openSignInForm,
    closeSignInForm,
    openRegisterForm,
    closeRegisterForm,
    openAddImageForm,
    closeAddImageForm,
    uploadPhoto,
  },
)(App);
