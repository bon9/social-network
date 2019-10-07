import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUserProfileThunk } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.profilePage.userProfile
  };
};

export default connect(
  mapStateToProps,
  {
    getUserProfile: getUserProfileThunk
  }
)(withRouter(ProfileContainer));
