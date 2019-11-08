import { usersAPI } from "./../api/api";

const TOGGLE_FOLLOW = "users/TOGGLE_FOLLOW";
// const UN_FOLLOW = "users/UN_FOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_COUNT_PAGE = "users/SET_TOTAL_COUNT_PAGE";
const SET_IS_FETCHING = "users/SET_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "users/TOGGLE_FOLLOWING_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  usersInFollowingChanging: [],
  fake: 10
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: action.newStateFollow };
          }
          return user;
        })
      };

    case SET_USERS:
      return { ...state, users: [...action.users] };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_COUNT_PAGE:
      return { ...state, totalUsersCount: action.totalCount };

    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        usersInFollowingChanging: action.isFetching
          ? // диспатчим экшн перед запросом c isFetching = true
            // и после ответа  c isFetching = false.
            // Если запрос в процессе, то добавляем айди в массив юзеров, которые в
            // данный момент в процессе (в компоненте проверяем, если айди юзера в
            // массиве есть, то дизейблим кнопку)
            [...state.usersInFollowingChanging, action.userId]
          : // Если запрос уже НЕ в процессе, то удаляем айдишник из массива
            state.usersInFollowingChanging.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};

function toggleFollow(userId, newStateFollow) {
  return { type: TOGGLE_FOLLOW, userId, newStateFollow };
}

function setUsers(users) {
  return { type: SET_USERS, users };
}

function setCurrentPage(currentPage) {
  return { type: SET_CURRENT_PAGE, currentPage };
}

function setTotalCount(totalCount) {
  return { type: SET_TOTAL_COUNT_PAGE, totalCount };
}

function setIsFetching(isFetching) {
  return { type: SET_IS_FETCHING, isFetching };
}

function toggleFollowingProgress(isFetching, userId) {
  return { type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId };
}

export const getUsersThunk = (currentPage, pageSize) => async dispatch => {
  dispatch(setCurrentPage(currentPage));
  dispatch(setIsFetching(true));
  const respose = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setIsFetching(false));
  dispatch(setUsers(respose.items));
  dispatch(setTotalCount(respose.totalCount));
};

export const toggleFollowingThunk = (followed, userId) => async dispatch => {
  dispatch(toggleFollowingProgress(true, userId));
  const reponse = await usersAPI.changeFollow(followed, userId);
  if (reponse.resultCode === 0) {
    followed
      ? dispatch(toggleFollow(userId, false))
      : dispatch(toggleFollow(userId, true));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export default usersReducer;
