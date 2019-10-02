import React from "react";

import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state: { posts }, addPost }) => {
  return (
    <div>
      <ProfileInfo />
      <Posts posts={posts} addPost={addPost} />
    </div>
  );
};

export default Profile;
