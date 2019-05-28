import React, { Component } from "react";
import { connect } from "react-redux";
import { getActivePhoto } from "store/photos/selectors";
import { selectPhoto, updatePhotoRating } from "store/photos/actions";
import Image from "./component/Image";

class ImageContainer extends Component {
  render() {
    return <Image {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activePhoto: getActivePhoto(state.photos),
  };
};

export default connect(
  mapStateToProps,
  { selectPhoto, updatePhotoRating },
)(ImageContainer);
