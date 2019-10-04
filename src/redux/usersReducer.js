const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
    users: []
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
            return { ...state, users: [...state.users, ...action.users] };

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

export default usersReducer;
