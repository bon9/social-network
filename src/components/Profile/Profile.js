import React from "react";

import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profilePage: { posts, newPostText }, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <Posts posts={posts} dispatch={dispatch} newPostText={newPostText} />
    </div>
  );
};

export default Profile;
