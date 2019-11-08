import profileReducer, { addPostCreator, deletePost } from "./profileReducer";

// 1. test data
const state = {
  posts: [
    { id: 1, message: "hello", like: "5" },
    { id: 2, message: "it is my second post", like: "3" },
    { id: 3, message: "yes", like: "5" }
  ]
};

it("length of posts should be incremented", () => {
  // 1. test data

  const action = addPostCreator("oleh");
  // 2. action
  const newState = profileReducer(state, action);

  // 3.expectaion
  expect(newState.posts.length).toBe(4);
});

it("message of new post should be correct", () => {
  // 1. test data

  const action = addPostCreator("oleh");
  // 2. action
  const newState = profileReducer(state, action);
  // 3.expectaion
  expect(newState.posts[3].message).toBe("oleh");
});

it("after deleting length of messages should be decrement", () => {
  const action = deletePost(1);
  // 2. action
  const newState = profileReducer(state, action);
  // 3.expectaion
  expect(newState.posts.length).toBe(2);
});

it("if id incorrect - length posts should stay the same ", () => {
  const action = deletePost(1000);
  // 2. action
  const newState = profileReducer(state, action);
  // 3.expectaion
  expect(newState.posts.length).toBe(3);
});
