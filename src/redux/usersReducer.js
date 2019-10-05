const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT_PAGE = "SET_TOTAL_COUNT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed };
                    }
                    return user;
                })
            };

        case SET_USERS:
            return { ...state, users: [...action.users] };
        // return { ...state, users: [...state.users, ...action.users] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };

        case SET_TOTAL_COUNT_PAGE:
            return { ...state, totalUsersCount: action.totalCount };

        case SET_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };

        default:
            return state;
    }
};

export function toggleFollow(userId) {
    return { type: TOGGLE_FOLLOW, userId };
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

export default usersReducer;
