import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      //action.data объект с userId, email, login
      return {
        ...state,
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  }
};

export function setAuthUserData(userId, email, login) {
  return { type: SET_AUTH_USER_DATA, data: { userId, email, login } };
}

export const getAuthUserDataThunk = () => {
  return dispatch => {
    authAPI.authMe().then(data => {
      // resultCode 0 - мы залогинены
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};

export default authReducer;
