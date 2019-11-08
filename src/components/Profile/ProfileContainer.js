import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

import {
  getUserProfileThunk,
  getUserStatusThunk,
  updateStatusThunk
} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    console.log("render profile");
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      getUserProfile: getUserProfileThunk,
      getUserStatus: getUserStatusThunk,
      updateStatus: updateStatusThunk
    }
  ),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
