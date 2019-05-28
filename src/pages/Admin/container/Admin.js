import { connect } from "react-redux";
import { getListOfUsers, getSelectedUser } from "store/user/selectors";
import { fetchUsers, selectedUser, fetchUser } from "store/user/actions";
import Admin from "../component/Admin";

const mapStateToProps = (state, ownProps) => {
  return {
    listOfUsers: getListOfUsers(state.user),
    selectedUser: getSelectedUser(state.user),
  };
};

export default connect(
  mapStateToProps,
  { fetchUsers, selectedUser, fetchUser },
)(Admin);
