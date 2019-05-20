import React, { Component } from "react";
import { connect } from "react-redux";
import NotFound from "./component/NotFound";

class NotFoundContainer extends Component {
  render() {
    return <NotFound />;
  }
}

export default connect()(NotFoundContainer);
