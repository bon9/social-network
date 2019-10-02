import React from "react";
import Posts from "./Posts";
import {
  addPostCreator,
  updateNewPostValueCreator
} from "../../../redux/profileReducer";

const PostsContainer = ({ store }) => {
  const state = store.getState();

  function onChangeValue(text) {
    store.dispatch(updateNewPostValueCreator(text));
  }

  function handleClickAddBtn() {
    store.dispatch(addPostCreator());
  }

  return (
    <Posts
      updateNewPostValue={onChangeValue}
      addPost={handleClickAddBtn}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostValue}
    />
  );
};

export default PostsContainer;
