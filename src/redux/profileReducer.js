const APP_POST = "ADD_POST";
const UPDATE_NEW_POST_VALUE = "UPDATE_NEW_POST_VALUE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    posts: [
        { id: 1, message: "hello", like: "5" },
        { id: 2, message: "it is my second post", like: "3" },
        { id: 3, message: "yes", like: "5" }
    ],
    newPostValue: "",
    userProfile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case APP_POST:
            const newPost = {
                id: 5,
                message: state.newPostValue,
                like: 5
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostValue: ""
            };

        case UPDATE_NEW_POST_VALUE: {
            return { ...state, newPostValue: action.value };
        }

        case SET_USER_PROFILE: {
            return { ...state, userProfile: action.userProfile };
        }

        default:
            return state;
    }
};

export function addPostCreator() {
    return { type: APP_POST };
}

export function updateNewPostValueCreator(newValue) {
    return { type: UPDATE_NEW_POST_VALUE, newValue };
}

export function setUserProfile(userProfile) {
    return { type: SET_USER_PROFILE, userProfile };
}

export default profileReducer;
