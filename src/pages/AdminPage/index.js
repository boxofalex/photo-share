import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './AdminPage.module.scss';


class AdminPage extends Component {

    render() {
        return <Fragment>
            <div>AdminPage</div>
        </Fragment>
    }
}

export default connect()(AdminPage);