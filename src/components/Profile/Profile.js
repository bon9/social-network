import React from "react";

import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ postData }) => {
  return (
    <div>
      <ProfileInfo />
      <Posts postData={postData} />
    </div>
  );
};

export default Profile;
