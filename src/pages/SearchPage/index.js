import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './SearchPage.module.scss';


class SearchPage extends Component {

    render() {
        return <Fragment>
            <div>SearchPage</div>
        </Fragment>
    }
}

export default connect()(SearchPage);