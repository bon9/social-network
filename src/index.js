import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";

function renderEntireTree(state) {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
}

// для первого рендера
renderEntireTree(store.getState());

store.subscribe(() => renderEntireTree(store.getState()));
