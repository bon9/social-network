import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import {
  addPostCreator,
  updateNewPostValueCreator
} from "../../../redux/profileReducer";

const Posts = ({ posts, dispatch, newPostText }) => {
  const postsRender = posts.map(({ message, like }) => (
    <Post message={message} like={like} />
  ));

  const newPostElement = React.createRef();

  function onChangeValue(e) {
    const text = e.target.value;
    dispatch(updateNewPostValueCreator(text));
  }

  function handleClickAddBtn() {
    dispatch(addPostCreator());
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
