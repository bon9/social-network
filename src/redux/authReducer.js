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

export default authReducer;
