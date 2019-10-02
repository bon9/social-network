import React from "react";

import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({
  profilePage: { posts, newPostText },
  addPost,
  changeTextareaValue
}) => {
  return (
    <div>
      <ProfileInfo />
      <Posts
        posts={posts}
        addPost={addPost}
        changeTextareaValue={changeTextareaValue}
        newPostText={newPostText}
      />
    </div>
  );
};

export default Profile;
