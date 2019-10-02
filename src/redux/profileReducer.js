const APP_POST = "ADD_POST";
const UPDATE_NEW_POST_VALUE = "UPDATE_NEW_POST_VALUE";

const initialState = {
  posts: [
    { id: 1, message: "hello", like: "5" },
    { id: 1, message: "it is my second post", like: "3" },
    { id: 1, message: "yes", like: "5" }
  ],
  newPostValue: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_POST:
      const newPost = {
        id: 5,
        message: state.newPostValue,
        like: 5
      };
      state.posts.push(newPost);
      state.newPostValue = "";
      return state;

    case UPDATE_NEW_POST_VALUE:
      state.newPostValue = action.newValue;
      return state;

    default:
      return state;
  }
};

export function addPostCreator() {
  return { type: APP_POST };
}

export function updateNewPostValueCreator(newValue) {
  return { type: UPDATE_NEW_POST_VALUE, newValue };
}

export default profileReducer;
