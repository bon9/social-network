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
        ...action.payload
      };

    default:
      return state;
  }
};

export function setAuthUserData(userId, email, login, isAuth) {
  return {
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth }
  };
}

export function setLogout() {
  return { type: SET_AUTH_USER_DATA };
}

export const getAuthUserDataThunk = () => {
  return dispatch => {
    authAPI.authMe().then(data => {
      // resultCode 0 - мы залогинены
      if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const loginThunk = (email, password, rememberMe) => {
  return dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
      // resultCode 0 - мы залогинены
      if (data.resultCode === 0) {
        dispatch(getAuthUserDataThunk());
      }
    });
  };
};

export const logoutThunk = () => {
  return dispatch => {
    authAPI.logout().then(data => {
      // resultCode 0 - мы залогинены
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
