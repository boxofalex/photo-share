import React, { Component } from "react";
import { connect } from "react-redux";
import Admin from "./component/Admin";

class AdminContainer extends Component {
  render() {
    return <Admin />;
  }
}

export default connect()(AdminContainer);
