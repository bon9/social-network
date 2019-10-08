import Posts from "./Posts";
import { addPostCreator } from "../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    posts: state.profilePage.posts
  };
};

const PostsContainer = connect(
  mapStateToProps,
  { addPostCreator }
)(Posts);

export default PostsContainer;
