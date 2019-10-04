import React from "react";
import Posts from "./Posts";
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
};

export default PostsContainer;
