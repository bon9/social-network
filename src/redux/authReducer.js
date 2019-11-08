import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const SET_ERROR_SUBMIT = "auth/SET_ERROR_SUBMIT";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  error: ""
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      //action.data объект с userId, email, login
      return {
        ...state,
        ...action.payload,
        error: ""
      };

    case SET_ERROR_SUBMIT:
      return { ...state, error: action.errorMessages };

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

export function setErrorSubmit(errorMessages) {
  return { type: SET_ERROR_SUBMIT, errorMessages };
}

// thunks
export const getAuthUserDataThunk = () => async dispatch => {
  const response = await authAPI.authMe();
  // resultCode 0 - мы залогинены
  if (response.resultCode === 0) {
    const { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const loginThunk = (email, password, rememberMe) => async dispatch => {
  const response = await authAPI.login(email, password, rememberMe);
  // resultCode 0 - мы залогинены
  if (response.resultCode === 0) {
    dispatch(getAuthUserDataThunk());
  } else {
    dispatch(setErrorSubmit(response.messages[0]));
  }
};

export const logoutThunk = () => async dispatch => {
  const response = await authAPI.logout();
  // resultCode 0 - мы залогинены
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
