import Posts from "./Posts";
import {
    addPostCreator,
    updateNewPostValueCreator
} from "../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostValue
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateNewPostValue: text => {
            dispatch(updateNewPostValueCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    };
};

const PostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);

export default PostsContainer;
