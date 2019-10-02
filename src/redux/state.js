const APP_POST = "ADD_POST";
const UPDATE_NEW_POST_VALUE = "UPDATE_NEW_POST_VALUE";
const UPDATE_NEW_MESSAGE_VALUE = "UPDATE_NEW_MESSAGE_VALUE";
const SEND_MESSAGE = "SEND_MESSAGE";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hello", like: "5" },
        { id: 1, message: "it is my second post", like: "3" },
        { id: 1, message: "yes", like: "5" }
      ],
      newPostValue: ""
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
      ],
      newMessageValue: ""
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  // вызвали в индексе, передали renderEntireTree из индекса в аргумент
  // и присвоили _callSubscriber
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    const state = this._state;
    const profilePage = state.profilePage;
    const dialogsPage = state.dialogsPage;

    switch (action.type) {
      case APP_POST:
        const newPost = {
          id: 5,
          message: profilePage.newPostValue,
          like: 5
        };
        profilePage.posts.push(newPost);
        profilePage.newPostValue = "";
        this._callSubscriber(state);
        break;

      case UPDATE_NEW_POST_VALUE:
        profilePage.newPostValue = action.newValue;
        this._callSubscriber(state);
        break;

      case SEND_MESSAGE:
        const newMessage = { message: dialogsPage.newMessageValue, id: 5 };
        dialogsPage.messages.push(newMessage);
        dialogsPage.newMessageValue = "";
        this._callSubscriber(state);
        break;

      case UPDATE_NEW_MESSAGE_VALUE:
        dialogsPage.newMessageValue = action.newValue;
        this._callSubscriber(state);
        break;

      default:
        break;
    }
  }
};

export function addPostCreator() {
  return { type: APP_POST };
}

export function updateNewPostValueCreator(newValue) {
  return { type: UPDATE_NEW_POST_VALUE, newValue };
}

export function sendMessageCreator() {
  return { type: SEND_MESSAGE };
}

export function updateNewMessageValueCreator(newValue) {
  return { type: UPDATE_NEW_MESSAGE_VALUE, newValue };
}
window.state = store._state;
export default store;
