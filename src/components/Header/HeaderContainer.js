import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Header from "./component/Header";

const stylesForMI = {
  rootForToolbar: {
    padding: 0,
  },
  rootForIconLogo: {
    fontSize: "32px",
    margin: "0 0 0 10px",
  },
  accountButton: {
    margin: "0 20px 0 0",
  },
};

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

export default withStyles(stylesForMI)(connect()(HeaderContainer));
