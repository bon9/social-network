import React from "react";

import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="10" rows="3"></textarea>
        <button>add</button>
        <div>new post</div>
        <Post message="hello" like="5" />
        <Post message="it is my second post" like="3" />
        <Post message="yes" like="4" />
      </div>
    </div>
  );
};

export default MyPosts;
