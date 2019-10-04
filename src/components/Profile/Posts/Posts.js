import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = ({ posts, newPostText, addPost, updateNewPostValue }) => {
    const postsRender = posts.map(({ message, like, id }) => (
        <Post message={message} like={like} key={id} />
    ));

    function onChangeValue(e) {
        const text = e.target.value;
        updateNewPostValue(text);
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
