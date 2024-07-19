import profileReducer, { addPost, deletePost } from "./profile-reducer";

const state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: `It's my first post`, likesCount: 20 },
  ],
};

it("length of posts should be incremented", () => {
  const action = addPost("it-kamasutra.com");
  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
  const action = addPost("it-kamasutra.com");
  const newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

it("after deleting length of messages should be decrement", () => {
  const action = deletePost(1);
  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(1);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  const action = deletePost(1000);
  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
