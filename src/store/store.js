import { configureStore } from "@reduxjs/toolkit";
<<<<<<< src/store/store.js
import userReducer  from './slices/user';
import postsReducer from "./slices/posts";


const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
  },
});

export default store ;