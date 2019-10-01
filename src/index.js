import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const postData = [
  { id: 1, message: "hello", like: "5" },
  { id: 1, message: "it is my second post", like: "3" },
  { id: 1, message: "yes", like: "5" }
];

const dialogsData = [
  { id: 1, name: "Oleh" },
  { id: 2, name: "Denya" },
  { id: 3, name: "Dima" },
  { id: 4, name: "Igor" }
];

const messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "where are you from ?" },
  { id: 3, message: "Ukarine" },
  { id: 4, message: "Yo" }
];

ReactDOM.render(
  <App
    postData={postData}
    dialogsData={dialogsData}
    messagesData={messagesData}
  />,
  document.getElementById("root")
);
