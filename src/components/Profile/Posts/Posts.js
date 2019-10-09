import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

import { Form, Field } from "react-final-form";
import { maxLength } from "./../../../utils/validators";

function Posts({ posts, addPostCreator }) {
  const postsRender = posts.map(({ message, like, id }) => (
    <Post message={message} like={like} key={id} />
  ));

  const onSubmit = values => {
    addPostCreator(values.postText);
  };

  return (
    <div className={classes.postsBlock}>
      <h2>My posts</h2>
      <NewPostForm onSubmit={onSubmit} />
      <div className={classes.posts}>{postsRender}</div>
    </div>
  );
}
const NewPostForm = ({ onSubmit }) => {
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
              <Field name="postText" validate={maxLength(5)}>
                {({ input, meta }) => (
                  <div>
                    <textarea
                      {...input}
                      type="text"
                      placeholder="add text your post"
                      className={
                        meta.error && meta.touched
                          ? classes.required
                          : undefined
                      }
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <button
                type="submit"
                disabled={
                  submitting || pristine || maxLength(5)(values.postText)
                }
              >
                ADD
              </button>
            </div>
          </form>
        );
      }}
    />
  );
};

export default Posts;
