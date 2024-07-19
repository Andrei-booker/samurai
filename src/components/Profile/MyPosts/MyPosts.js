import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo(({ posts, addPost }) => {
  const postsElements = posts.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const newPostElement = React.createRef();

  const onAddPost = values => {
    addPost(values);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

const AddNewPostForm = () => {
  return (
    <form className={classes.addPost}>
      <div>
        <textarea />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

export default MyPosts;
