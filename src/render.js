import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, changeTextareaValue } from "./redux/state";

export function renderEntireTree(state) {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      changeTextareaValue={changeTextareaValue}
    />,
    document.getElementById("root")
  );
}
