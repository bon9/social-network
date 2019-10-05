import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
   componentDidMount() {
      const userId = this.props.match.params.userId;
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/profile/${userId ||
               1509}`
         )
         .then(res => {
            this.props.setUserProfile(res.data);
         });
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
      setUserProfile
   }
)(withRouter(ProfileContainer));
