import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks
//// get current user
export const getCurrentUser = createAsyncThunk(
    'user/getUser',
    async (payload) => {
        try {
            const { data } = await axios.get(
                'https://motion.propulsion-home.ch/backend/api/users/me/',
                {
                    headers: {
                        Authorization: payload.token,
                    },
                }
            );
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

//// update current user
export const updateCurrentUser = createAsyncThunk(
    'user/updateUser',
    async (payload) => {
        console.log('updating user with', payload.body);
        try {
            const { data } = await axios.patch(
                'https://motion.propulsion-home.ch/backend/api/users/me/',

                payload.body,
                {
                    headers: {
                        Authorization: payload.token,
                        'Content-Type': 'multipart/form-data',
                        // 'Content-Type': 'application/json',
                    },
                }
            );
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

const initialState = {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    username: '',
    job: '',
    avatar: '',
    banner: '',
    location: '',
    about_me: '',
    things_user_likes: [],
    logged_in_user_is_following: '',
    logged_in_user_is_friends: '',
    logged_in_user_is_rejected: '',
    logged_in_user_received_fr: '',
    logged_in_user_sent_fr: '',
    amount_of_posts: '',
    amount_of_likes: '',
    amount_of_friends: '',
    amount_of_followers: '',
    amount_following: '',
};

const currentUser = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCurrentUser.pending, (state, action) => {
                state.status = 'pending';
                // console.log('status: pending');
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.status = 'fullfilled';
                // console.log('status: fullfilled');
                // console.log('fullfillled action', action);

                const {
                    id,
                    first_name,
                    last_name,
                    email,
                    username,
                    job,
                    avatar,
                    banner,
                    location,
                    about_me,
                    things_user_likes,
                    logged_in_user_is_following,
                    logged_in_user_is_friends,
                    logged_in_user_is_rejected,
                    logged_in_user_received_fr,
                    logged_in_user_sent_fr,
                    amount_of_posts,
                    amount_of_likes,
                    amount_of_friends,
                    amount_of_followers,
                    amount_following,
                } = action.payload;

                state.id = id;
                state.first_name = first_name;
                state.last_name = last_name;
                state.email = email;
                state.username = username;
                state.job = job;
                state.location = location;
                // state.phone = phone; // phone missing from endpoint?
                state.about_me = about_me;
                // state.password = password; // password missing from endpoint?
                state.avatar = avatar;
                state.banner = banner;
                state.amount_of_posts = amount_of_posts;
                state.amount_of_likes = amount_of_likes;
                state.amount_of_friends = amount_of_friends;
                state.amount_of_followers = amount_of_followers;
                state.amount_following = amount_following;
                state.things_user_likes = things_user_likes;
            })

            .addCase(getCurrentUser.rejected, (state, action) => {
                state.status = 'rejected';
                console.log('status: rejected');
                console.log(action.error.message);
            });
    },
});

export const {} = currentUser.actions;

export const selectCurrentUser = (store) => store.currentUser;

export default currentUser.reducer;
