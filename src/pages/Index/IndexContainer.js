import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Index from "./component/Index";

const stylesForMI = {
  rootForSearchLogo: {
    fontSize: "30px",
    margin: "0",
  },
  rootForsearchButton: {
    margin: "0",
    width: "40px",
    heigh: "30px",
    padding: "5px 0",
    minWidth: "40px",
    backgroundColor: "#fff",
    borderRadius: "0 5px 5px 0",
    border: "0",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
};

class IndexContainer extends Component {
  render() {
    const { classes } = this.props;
    return <Index muiClassesForButton={classes} />;
  }
}

export default withStyles(stylesForMI)(connect()(IndexContainer));
