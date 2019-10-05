import React from "react";

import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ userProfile }) => {
    return (
        <>
            <ProfileInfo userProfile={userProfile} />
            <PostsContainer />
        </>
    );
};

export default Profile;
