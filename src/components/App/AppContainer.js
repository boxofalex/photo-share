import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions, userSelectors } from "store/user";
import { uiActions, uiSelectors } from "store/ui";
import { photosActions, photosSelectors } from "store/photos";
import App from "./component/App";

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: userSelectors.getUserState(state),
    ui: uiSelectors.getUiState(state),
    availableCategories: photosSelectors.getAvailableCategories(state),
  };
};

export default connect(
  mapStateToProps,
  { ...userActions, ...uiActions, ...photosActions },
)(AppContainer);
