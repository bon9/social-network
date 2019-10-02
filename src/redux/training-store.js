// import profileReducer from "./profileReducer";
// import dialogsReducer from "./dialogsReducer";
// import sidebarReducer from "./sidebarReducer";

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
    },

    sidebarPage: {}
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
    const profilePage = this._state.profilePage;
    const dialogsPage = this._state.dialogsPage;
    const sidebar = this._state.sidebar;

    this._state.profilePage = profileReducer(profilePage, action);
    this._state.dialogsPage = dialogsReducer(dialogsPage, action);
    this._state.sidebar = sidebarReducer(sidebar, action);
    this._callSubscriber(this._state);
  }
};

window.state = store._state;
// export default store;
