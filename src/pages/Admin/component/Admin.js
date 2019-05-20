import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./Admin.module.scss";

class Admin extends Component {
  render() {
    return (
      <Fragment>
        <div>AdminPage</div>
      </Fragment>
    );
  }
}

export default connect()(Admin);
