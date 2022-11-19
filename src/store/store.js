//libraries
import { configureStore } from '@reduxjs/toolkit';

//reducers

import userReducer from './slices/loginUser';
import postsReducer from './slices/posts';
import registerReducer from './slices/registerUser';
import currentUserReducer from './slices/currentUser';

const store = configureStore({
    reducer: {
        user: userReducer,
        register: registerReducer,
        posts: postsReducer,
        currentUser: currentUserReducer,
    },
});

export default store;
