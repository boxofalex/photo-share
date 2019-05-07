import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/Camera';
import { connect } from 'react-redux';

import styles from './Header.module.scss';


class Header extends Component {

    render() {
        return <Fragment>
            <div className={styles.header}>
                <AppBar position="static">
                    <Toolbar>
                        <h1>Photo Share</h1>
                        <IconButton color="secondary">
                           <CameraIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment>
    }
}

export default connect()(Header);