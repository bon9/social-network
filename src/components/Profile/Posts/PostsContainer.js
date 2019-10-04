import React from "react";
import Posts from "./Posts";
<<<<<<< HEAD
import StoreContext from "./../../../StoreContext";
import {
    addPostCreator,
    updateNewPostValueCreator
} from "../../../redux/profileReducer";

const PostsContainer = ({ store }) => {
    return (
        <StoreContext.Consumer>
            {store => {
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
            }}
        </StoreContext.Consumer>
    );
=======
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
>>>>>>> 3da99c14f488743b78a66defa12573e7f7043707
};

export default PostsContainer;
