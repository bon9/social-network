import { getAuthUserDataThunk } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

export function initializedSuccess() {
  return {
    type: INITIALIZED_SUCCESS
  };
}

export const initializeAppThunk = () => dispatch => {
  let promise = dispatch(getAuthUserDataThunk());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
