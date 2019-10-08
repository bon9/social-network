import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

import { Form, Field } from "react-final-form";

const PostForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values, form, submitting, pristine }) => {
        return (
          <form
            onSubmit={e => {
              handleSubmit(e);
              form.reset();
            }}
          >
            <div>
              <Field
                name="postText"
                component="textarea"
                placeholder="add text your post"
              />
            </div>
            <div>
              <button type="submit" disabled={submitting || pristine}>
                ADD
              </button>
            </div>
          </form>
        );
      }}
    />
  );
};

const Posts = ({ posts, addPostCreator }) => {
  const postsRender = posts.map(({ message, like, id }) => (
    <Post message={message} like={like} key={id} />
  ));

  const onSubmit = values => {
    addPostCreator(values.postText);
  };

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <PostForm onSubmit={onSubmit} />
      <div className={classes.posts}>{postsRender}</div>
    </div>
  );
};

export default Posts;
