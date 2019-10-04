import { connect } from "react-redux";
import Users from "./Users";

import { toggleFollowAC, setUserAC } from "../../redux/usersReducer";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToogleFollow: userId => {
      dispatch(toggleFollowAC(userId));
    },
    onSetUsers: users => {
      dispatch(setUserAC(users));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
