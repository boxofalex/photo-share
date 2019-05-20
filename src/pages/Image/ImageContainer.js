import React, { Component } from "react";
import { connect } from "react-redux";
import Image from "./component/Image";

class ImageContainer extends Component {
  render() {
    return <Image />;
  }
}

export default connect()(ImageContainer);
