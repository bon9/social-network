import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, changeTextareaValue, subscribe } from "./redux/state";
import state from "./redux/state";

function renderEntireTree(state) {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      changeTextareaValue={changeTextareaValue}
    />,
    document.getElementById("root")
  );
}

// для первого рендера
renderEntireTree(state);

subscribe(renderEntireTree);
