import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postData }) => {
  const posts = postData.map(({ message, like }) => (
    <Post message={message} like={like} />
  ));

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea name="" id="" cols="10" rows="3"></textarea>
        <button className={classes.btnAdd}>add</button>
        <div className={classes.posts}>{posts}</div>
      </div>
    </div>
  );
};

export default MyPosts;
