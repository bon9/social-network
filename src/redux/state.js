import { renderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "hello", like: "5" },
      { id: 1, message: "it is my second post", like: "3" },
      { id: 1, message: "yes", like: "5" }
    ]
  },

  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "where are you from ?" },
      { id: 3, message: "Ukarine" },
      { id: 4, message: "Yo" }
    ],
    dialogs: [
      { id: 1, name: "Oleh" },
      { id: 2, name: "Denya" },
      { id: 3, name: "Dima" },
      { id: 4, name: "Igor" }
    ]
  }
};

export function addPost(postMessage) {
  const newPost = {
    id: 5,
    message: postMessage,
    like: 5
  };
  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
}

export default state;
