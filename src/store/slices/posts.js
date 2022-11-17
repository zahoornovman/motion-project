import { v4 as uuid } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [
            { userId: 99, postId: uuid(), content: 'Hello', liked: true },
            {
                userId: 99,
                postId: uuid(),
                content: 'Good morning',
                liked: false,
            },
            { userId: 99, postId: uuid(), content: 'Bye!', liked: false },
        ],
    },
    reducers: {
        add_post: (state, action) => {
            const post = {
                userId: 99,
                postId: uuid(),
                content: action.payload,
                liked: false,
            };
            state.list.push(post);
        },
        remove_post: (state, action) => {
            state.list = state.list.filter(
                (post) => post.postId !== action.payload
            );
        },
        toggle_liked: (state, action) => {
            // gets the index of the post from the state
            const postIndex = state.list.findIndex(
                (post) => post.postId === action.payload
            );
            const post = state.list[postIndex];
            // inverts the property of post liked
            post.liked = !post.liked;
        },
    },
});

export const { add_post, remove_post, toggle_liked } = postsSlice.actions;

export default postsSlice.reducer;
