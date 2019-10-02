import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = ({ posts, addPost }) => {
  const postsRender = posts.map(({ message, like }) => (
    <Post message={message} like={like} />
  ));

  const newPostElement = React.createRef();

  function handleClickAddBtn() {
    const text = newPostElement.current.value;
    addPost(text);
    newPostElement.current.value = "";
  }

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea ref={newPostElement} cols="10" rows="3"></textarea>
        <button className={classes.btnAdd} onClick={handleClickAddBtn}>
          add
        </button>
        <div className={classes.posts}>{postsRender}</div>
      </div>
    </div>
  );
};

export default Posts;
