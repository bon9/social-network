import React from "react";

import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ store }) => {
   return (
      <div>
         <ProfileInfo />
         <PostsContainer store={store} />
      </div>
   );
};

export default Profile;
