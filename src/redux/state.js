const APP_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "hello", like: "5" },
        { id: 1, message: "it is my second post", like: "3" },
        { id: 1, message: "yes", like: "5" }
      ],
      newPostText: ""
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
			
    }
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  // вызвали в индексе, передали renderEntireTree из индекса в аргумент
  // и присвоили местной renderEntireTree
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // {type: "..."}
    switch (action.type) {
      case "ADD_POST":
        const newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          like: 5
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
        break;

      case "UPDATE_NEW_POST_TEXT":
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;

      default:
        break;
    }
  }
};

export function addPostActionCreator() {
  return { type: APP_POST };
}

export function updateNewPostTextActionCreator(newText) {
  return { type: UPDATE_NEW_POST_TEXT, newText };
}

export default store;
