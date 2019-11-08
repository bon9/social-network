import { usersAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT_PAGE = "SET_TOTAL_COUNT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

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
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };

    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
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

export function follow(userId) {
  return { type: FOLLOW, userId };
}

export function unFollow(userId) {
  return { type: UN_FOLLOW, userId };
}

export function setUsers(users) {
  return { type: SET_USERS, users };
}

export function setCurrentPage(currentPage) {
  return { type: SET_CURRENT_PAGE, currentPage };
}

export function setTotalCount(totalCount) {
  return { type: SET_TOTAL_COUNT_PAGE, totalCount };
}

export function setIsFetching(isFetching) {
  return { type: SET_IS_FETCHING, isFetching };
}

export function toggleFollowingProgress(isFetching, userId) {
  return { type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId };
}

export const getUsersThunk = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
    });
  };
};

export const toggleFollowingThunk = (followed, userId) => {
  return dispatch => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.changeFollow(followed, userId).then(data => {
      if (data.resultCode === 0) {
        followed ? dispatch(unFollow(userId)) : dispatch(follow(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;
