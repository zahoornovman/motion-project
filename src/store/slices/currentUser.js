import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUserToken } from './loginUser';

export const getCurrentUser = createAsyncThunk(
    'user/getUser',
    async (payload) => {
        let token = useSelector(selectUserToken);
        console.log(token);
        console.log(payload);
        try {
            const { data } = await axios.get(
                'https://motion.propulsion-home.ch/backend/api/users/me/',
                {
                    headers: {
                        Authorization: `${useSelector(selectUserToken)}`,
                    },
                },
                payload
            );
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

const initialState = {
    id: null,
    email: '',
    first_name: '',
    last_name: '',
    username: '',
    job: '',
    avatar: '',
    banner: '',
    location: '',
    about_me: '',
    things_user_likes: [
        {
            keyword: '',
        },
    ],
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
                console.log('status: pending');
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.status = 'fullfilled';
                console.log('status: fullfilled');
                console.log('fullfillled action', action);

                // const { email, first_name, last_name } =
                //     action.payload.currentUser;

                // state.email = email;
                // state.first_name = first_name;
                // state.last_name = last_name;
                // state.token = `Bearer ${action.payload.access}`;
                // state.token_refresh = `Bearer ${action.payload.refresh}`;

                // console.log('firstname', state.first_name);
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
