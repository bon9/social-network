import { profileAPI } from "./../api/api";

const APP_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "hello", like: "5" },
    { id: 2, message: "it is my second post", like: "3" },
    { id: 3, message: "yes", like: "5" }
  ],
  userProfile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_POST:
      const newPost = {
        id: 5,
        message: action.post,
        like: 5
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userProfile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state;
  }
};

export function addPostCreator(post) {
  return { type: APP_POST, post };
}

export function setUserProfile(userProfile) {
  return { type: SET_USER_PROFILE, userProfile };
}

export function setStatus(status) {
  return { type: SET_STATUS, status };
}

export const getUserProfileThunk = userId => {
  return dispatch => {
    profileAPI.getProfile(userId).then(res => {
      dispatch(setUserProfile(res.data));
    });
  };
};

export const getUserStatusThunk = userId => {
  return dispatch => {
    profileAPI.getStatus(userId).then(res => {
      dispatch(setStatus(res.data));
    });
  };
};

export const updateStatusThunk = status => {
  return dispatch => {
    profileAPI.updateStatus(status).then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
