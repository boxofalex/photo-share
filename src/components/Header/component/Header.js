import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CameraIcon from "@material-ui/icons/Camera";
import Button from "@material-ui/core/Button";

import styles from "./Header.module.scss";

const Header = ({ classes }) => {
  return (
    <div className={styles.header}>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.rootForToolbar }}>
          <div className={styles.header__content}>
            <div className={styles.header__content__left}>
              <Typography component="h2" variant="h2">
                PhotoShare
              </Typography>
              <CameraIcon className={classes.rootForIconLogo} color="secondary" />
            </div>
            <div className={styles.header__content__right}>
              <Button className={classes.accountButton} disableRipple={true}>
                Войти
              </Button>
              <Button variant="contained" color="secondary" disableRipple={true}>
                Добавить Фото
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
