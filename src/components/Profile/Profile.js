import React from "react";

import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state: { posts } }) => {
  return (
    <div>
      <ProfileInfo />
      <Posts posts={posts} />
    </div>
  );
};

export default Profile;
