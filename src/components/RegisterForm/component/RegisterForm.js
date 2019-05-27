import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import styles from "./RegisterForm.module.scss";

class RegisterForm extends Component {
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

  handleSubmit = event => {
    event.preventDefault();
    const { login, password } = this.state;
    const { registerUser } = this.props;
    if (login && password) {
      registerUser(login, password);
    }
  };

  render() {
    const { isOpen, toggleRegisterForm } = this.props;
    return (
      <div className={styles.container}>
        <Dialog open={isOpen}>
          <DialogTitle id="form-dialog-title">Регистрация нового пользователя</DialogTitle>
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
            </DialogContent>
            <DialogActions>
              <Button type="submit" variant="contained" color="secondary" disableRipple>
                Подтвредить
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disableRipple
                onClick={toggleRegisterForm}>
                Отмена
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

export default RegisterForm;
