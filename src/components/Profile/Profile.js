import React from "react";

import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ store }) => {
<<<<<<< HEAD
    return (
        <div>
            <ProfileInfo />
            <PostsContainer />
        </div>
    );
=======
  return (
    <div>
      <ProfileInfo />
      <PostsContainer store={store} />
    </div>
  );
>>>>>>> 3da99c14f488743b78a66defa12573e7f7043707
};

export default Profile;
