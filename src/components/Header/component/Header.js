import React, { Fragment } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CameraIcon from "@material-ui/icons/Camera";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = ({ classes, isUserAuthorised, toggleSignForm, openAddPhotoForm, logOutUser }) => {
  return (
    <div className={styles.header}>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.rootForToolbar }}>
          <div className={styles.header__content}>
            <Link to="/">
              <div className={styles.header__content__left}>
                <Typography component="h2" variant="h2">
                  PhotoShare
                </Typography>
                <CameraIcon className={classes.rootForIconLogo} color="secondary" />
              </div>
            </Link>
            <div className={styles.header__content__right}>
              {isUserAuthorised ? (
                <Fragment>
                  <Link to="/admin">
                    <Button
                      className={styles.myAccountButton}
                      variant="contained"
                      color="secondary"
                      disableRipple>
                      Пользователи
                    </Button>
                  </Link>
                  <Button
                    className={styles.addPhotoButton}
                    variant="contained"
                    color="secondary"
                    disableRipple
                    onClick={openAddPhotoForm}>
                    Добавить Фото
                  </Button>
                  <Button
                    className={styles.addPhotoButton}
                    variant="contained"
                    color="secondary"
                    disableRipple
                    onClick={logOutUser}>
                    Выйти
                  </Button>
                </Fragment>
              ) : (
                <Button className={classes.accountButton} disableRipple onClick={toggleSignForm}>
                  Войти
                </Button>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.shape({}),
  isUserAuthorised: PropTypes.any,
  toggleSignForm: PropTypes.func.isRequired,
  openAddPhotoForm: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

export default Header;
