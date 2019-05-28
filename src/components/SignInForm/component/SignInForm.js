import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import styles from "./SignInForm.module.scss";

class SignInForm extends Component {
  state = {
    login: "",
    password: "",
  };

  handleLogin = event => {
    this.setState({ login: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handlerRegistrationStep = () => {
    const { toggleSignForm, toggleRegisterForm } = this.props;
    toggleSignForm();
    toggleRegisterForm();
  };

  handleSubmit = event => {
    event.preventDefault();
    const { login, password } = this.state;
    const { logInUser } = this.props;
    if (login && password) {
      logInUser(login, password);
    }
  };

  render() {
    const { isOpen, toggleSignForm } = this.props;
    return (
      <div className={styles.container}>
        <Dialog open={isOpen}>
          <DialogTitle id="form-dialog-title">Войдите в Ваш аккаунт</DialogTitle>
          <form className={styles.signinForm} onSubmit={this.handleSubmit}>
            <DialogContent>
              <div className={styles.signinForm__login}>
                <span>Логин (email)</span>
                <TextField
                  id="login"
                  name="login"
                  type="email"
                  margin="normal"
                  onChange={this.handleLogin}
                  fullWidth
                />
              </div>
              <div className={styles.signinForm__password}>
                <span>Пароль</span>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  margin="normal"
                  fullWidth
                  onChange={this.handlePassword}
                />
              </div>
              <span className={styles.signinForm__register}>
                Нет аккаунта? Пройдите{" "}
                <button type="button" onClick={this.handlerRegistrationStep}>
                  регистрацию
                </button>
              </span>
            </DialogContent>
            <DialogActions>
              <Button type="submit" variant="contained" color="secondary" disableRipple>
                Войти
              </Button>
              <Button variant="contained" color="secondary" disableRipple onClick={toggleSignForm}>
                Отмена
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

SignInForm.propTypes = {
  toggleSignForm: PropTypes.func.isRequired,
  toggleRegisterForm: PropTypes.func.isRequired,
  logInUser: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SignInForm;
