const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT_PAGE = "SET_TOTAL_COUNT_PAGE";

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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

        default:
            return state;
    }
};

export function toggleFollowAC(userId) {
    return { type: TOGGLE_FOLLOW, userId };
}

export function setUserAC(users) {
    return { type: SET_USERS, users };
}

export function setCurrentPageAC(currentPage) {
    return { type: SET_CURRENT_PAGE, currentPage };
}

export function setTotalCountAC(totalCount) {
    return { type: SET_TOTAL_COUNT_PAGE, totalCount };
}

export default usersReducer;
