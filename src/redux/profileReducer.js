import { profileAPI } from "./../api/api";

const ADD_POST = "profile/ADD_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";

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
    case ADD_POST:
      const newPost = {
        id: 5,
        message: action.post,
        like: 5
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      };
    }

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
  return { type: ADD_POST, post };
}

export function deletePost(postId) {
  return { type: DELETE_POST, postId };
}

export function setUserProfile(userProfile) {
  return { type: SET_USER_PROFILE, userProfile };
}

export function setStatus(status) {
  return { type: SET_STATUS, status };
}

export const getUserProfileThunk = userId => async dispatch => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatusThunk = userId => async dispatch => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatusThunk = status => async dispatch => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
