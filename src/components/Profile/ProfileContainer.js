import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";

import { setUserProfile } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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
)(ProfileContainer);
