import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "./component/Search";

class SearchContainer extends Component {
  render() {
    return <Search />;
  }
}

export default connect()(SearchContainer);
