import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions, userSelectors } from "store/user";
import Admin from "./component/Admin";

class AdminContainer extends Component {
  render() {
    return <Admin {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    listOfUsers: userSelectors.getListOfUsers(state.user),
    selectedUser: userSelectors.getSelectedUser(state.user),
  };
};

export default connect(
  mapStateToProps,
  { ...userActions },
)(AdminContainer);
