import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";

import MyPosts from "./MyPosts";

const mapStateToProps = state => {
  return {
    posts: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: newPostText => dispatch(addPost(newPostText)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
