import React from "react";

import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ userProfile, status, updateStatus }) => {
  return (
    <>
      <ProfileInfo
        userProfile={userProfile}
        status={status}
        updateStatus={updateStatus}
      />
      <PostsContainer />
    </>
  );
};

export default Profile;
