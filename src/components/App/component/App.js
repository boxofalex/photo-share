import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "material/theme.config";
import styles from "./App.module.scss";
import { Header } from "components/Header";
import { SignInForm } from "components/SignInForm";
import { RegisterForm } from "components/RegisterForm";
import { Index } from "pages/Index";
import { Image } from "pages/Image";
import { Admin } from "pages/Admin";
import { Search } from "pages/Search";
import { NotFound } from "pages/NotFound";

class App extends Component {
  logInUser = (login, password) => {
    const { loginUser } = this.props;
    loginUser(login, password);
  };

  registerUser = (login, password) => {
    const { registerUser } = this.props;
    registerUser(login, password);
  };

  render() {
    const {
      user,
      ui,
      openSignInForm,
      closeSignInForm,
      openRegisterForm,
      closeRegisterForm,
      openAddImageForm,
    } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            isUserAuthorised={user && user.activeUserId}
            logInUser={this.logInUser}
            toggleSignForm={openSignInForm}
            openAddPhotoForm={openAddImageForm}
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
          isOpen={ui.isSignInFormOpen}
          toggleSignForm={closeSignInForm}
          toggleRegisterForm={openRegisterForm}
          logInUser={this.logInUser}
        />
        <RegisterForm
          isOpen={ui.isRegisterFormOpen}
          toggleRegisterForm={closeRegisterForm}
          registerUser={this.registerUser}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
