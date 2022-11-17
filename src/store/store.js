import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import postsReducer from "./slices/posts";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export default store;
