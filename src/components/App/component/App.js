import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "material/theme.config";
import { Header } from "components/Header";
import { SignInForm } from "components/SignInForm";
import { RegisterForm } from "components/RegisterForm";
import { Index } from "pages/Index";
import { Image } from "pages/Image";
import { Admin } from "pages/Admin";
import { Search } from "pages/Search";
import { NotFound } from "pages/NotFound";
import { AddPhotoForm } from "components/AddPhotoForm";

import styles from "./App.module.scss";

class App extends Component {
  logInUser = (login, password) => {
    const { loginUser } = this.props;
    loginUser(login, password);
  };

  registerUser = (login, password) => {
    const { registerUser } = this.props;
    registerUser(login, password);
  };

  logOutUser = () => {
    const { logoutUser } = this.props;
    logoutUser();
  };

  render() {
    const {
      activeUserId,
      isRegisterFormOpen,
      isSignInFormOpen,
      isAddImageFormOpen,
      openSignInForm,
      closeSignInForm,
      openRegisterForm,
      closeRegisterForm,
      openAddImageForm,
      closeAddImageForm,
      uploadPhoto,
      availableCategories,
    } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            isUserAuthorised={activeUserId}
            logInUser={this.logInUser}
            toggleSignForm={openSignInForm}
            openAddPhotoForm={openAddImageForm}
            logOutUser={this.logOutUser}
          />
          <div className={styles.mainContent}>
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/photo/:id" component={Image} />
              <Route path="/search" component={Search} />
              <Route path="/admin" component={Admin} />
              <Route path="/404" component={NotFound} />
              <Redirect from="*" to="/404" />
            </Switch>
          </div>
        </BrowserRouter>
        <SignInForm
          isOpen={isSignInFormOpen}
          toggleSignForm={closeSignInForm}
          toggleRegisterForm={openRegisterForm}
          logInUser={this.logInUser}
        />
        <RegisterForm
          isOpen={isRegisterFormOpen}
          toggleRegisterForm={closeRegisterForm}
          registerUser={this.registerUser}
        />
        <AddPhotoForm
          isOpen={isAddImageFormOpen}
          closeForm={closeAddImageForm}
          uploadPhoto={uploadPhoto}
          availableCategories={availableCategories}
        />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  activeUserId: PropTypes.any,
  isRegisterFormOpen: PropTypes.bool.isRequired,
  isSignInFormOpen: PropTypes.bool.isRequired,
  isAddImageFormOpen: PropTypes.bool.isRequired,
  openSignInForm: PropTypes.func.isRequired,
  closeSignInForm: PropTypes.func.isRequired,
  openRegisterForm: PropTypes.func.isRequired,
  closeRegisterForm: PropTypes.func.isRequired,
  openAddImageForm: PropTypes.func.isRequired,
  closeAddImageForm: PropTypes.func.isRequired,
  uploadPhoto: PropTypes.func.isRequired,
  availableCategories: PropTypes.array.isRequired,
};

export default App;
