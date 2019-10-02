import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/state";

function renderEntireTree(state) {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
}

// для первого рендера
renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
