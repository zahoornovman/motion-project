//libraries
import { configureStore } from "@reduxjs/toolkit";

//reducers
import userReducer from "./slices/loginUser";
import postsReducer from "./slices/posts";
import registerReducer from "./slices/registerUser";
import { reducer as notificationReducer } from "./slices/notifications";

const store = configureStore({
  reducer: {
    user: userReducer,
    register: registerReducer,
    posts: postsReducer,
    notifications: notificationReducer,
  },
});

export default store;
