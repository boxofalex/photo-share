import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearchTerm, getSearchResult } from "store/search/selectors";
import { searchPhoto } from "store/search/actions";
import { withStyles } from "@material-ui/core/styles";
import Search from "./component/Search";

const stylesForMI = {
  rootForSearchLogo: {
    fontSize: "30px",
    margin: "0",
  },
  rootForsearchButton: {
    margin: "0",
    width: "40px",
    height: "40px",
    padding: "5px 0",
    minWidth: "40px",
    backgroundColor: "#fff",
    borderRadius: "0 5px 5px 0",
    border: "2px solid #413F54",
    borderLeft: "0",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
};

class SearchContainer extends Component {
  render() {
    const { classes } = this.props;
    return <Search muiClassesForButton={classes} {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    searchTerm: getSearchTerm(state.search),
    result: getSearchResult(state.search),
  };
};

export default withStyles(stylesForMI)(
  connect(
    mapStateToProps,
    { searchPhoto },
  )(SearchContainer),
);
