import React from "react";
import classes from "./Post.module.css";

const Post = ({ message, like }) => {
  return (
    <div className={classes.item}>
      <img
        src="http://loveopium.ru/content/2011/06/8ad804de32dc_12BEF/00.jpg"
        alt="s"
      />
      {message}
      <span>{` like: ${like}`}</span>
    </div>
  );
};

export default Post;
