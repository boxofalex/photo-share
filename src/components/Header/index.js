import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/Camera';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './Header.module.scss';

const stylesForMI = {
    root: {
        padding: 0,
    }
}

class Header extends Component {

    render() {

        const { classes } = this.props;

        return <Fragment>
            <div className={styles.header}>
                <AppBar position="static">
                    <Toolbar classes={{ root: classes.root }}>
                        <div className={styles.header_row}>
                            <div className={styles.header_row__left}>
                                <div className={styles.header_row__title}>
                                    <h3>PhotoShare</h3>
                                </div>
                                <CameraIcon color="secondary"/>
                            </div>
                            <div className={styles.header_row__right}>
                                <h3>Войти</h3>
                                <Button variant="contained" color="secondary">
                                  Добавить Фото
                                </Button>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment>
    }
}

export default withStyles(stylesForMI)(connect()(Header));