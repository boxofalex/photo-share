import React, { Component } from "react";
import { connect } from "react-redux";
import { photosActions, photosSelectors } from "store/photos";
import Image from "./component/Image";

class ImageContainer extends Component {
  render() {
    return <Image {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activePhoto: photosSelectors.getActivePhoto(state),
  };
};

export default connect(
  mapStateToProps,
  { ...photosActions },
)(ImageContainer);
