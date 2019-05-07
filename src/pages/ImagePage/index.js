import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './ImagePage.module.scss';


class ImagePage extends Component {

    render() {
        return <Fragment>
            <div>ImagePage</div>
        </Fragment>
    }
}

export default connect()(ImagePage);