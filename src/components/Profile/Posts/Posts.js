import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = ({ posts, addPost, changeTextareaValue, newPostText }) => {
  const postsRender = posts.map(({ message, like }) => (
    <Post message={message} like={like} />
  ));

  const newPostElement = React.createRef();

  function onChangeValue(e) {
    changeTextareaValue(e.target.value);
  }

  function handleClickAddBtn() {
    addPost();
  }

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea
          value={newPostText}
          ref={newPostElement}
          cols="10"
          rows="3"
          onChange={onChangeValue}
        ></textarea>
        <button className={classes.btnAdd} onClick={handleClickAddBtn}>
          add
        </button>
        <div className={classes.posts}>{postsRender}</div>
      </div>
    </div>
  );
};

export default Posts;
