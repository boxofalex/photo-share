import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './NotFoundPage.module.scss';


class NotFoundPage extends Component {

    render() {
        return <Fragment>
            <div>NotFoundPage</div>
        </Fragment>
    }
}

export default connect()(NotFoundPage);