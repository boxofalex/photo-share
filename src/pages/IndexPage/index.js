import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './IndexPage.module.scss';


class IndexPage extends Component {

    render() {
        return <Fragment>
            <div>Index Page</div>
        </Fragment>
    }
}

export default connect()(IndexPage);