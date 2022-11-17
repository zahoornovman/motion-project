//libraries
import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

import { baseURL } from '../../api-client';



export const fetchAllUsers = createAsyncThunk(

    'findFriends/fetchAllUsers' , async ( payload, {rejectWithValue}) => {
        try{
            const { data } = await axios.get('https://motion.propulsion-home.ch/backend/api/users/?limit=10&offset=0',{
                headers: {
                    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODcyOTU1LCJqdGkiOiIyMWM2NGZmNDA1YTk0MDllYjk0N2ZjYTAyYzI1ODAxNiIsInVzZXJfaWQiOjE5NzN9.NiwT2veTN1-uEoU8B1GaxW_41lMRREc1JsLmYickftI`
                }
            })
            return data;
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const findFriendsSlice = createSlice({

    name: 'findFriends',
    initialState: {
        results: [],
        error: '',
        bigError:''
    },
    reducers: {
    },
    extraReducers: {
        [fetchAllUsers.pending]: (state) => {
          state.loading = 'loading'
        },
        [fetchAllUsers.fulfilled]: (state, action) => {
          state.loading = 'loading complete'
          console.log(action);
          state.results = action.payload.results
        },
        [fetchAllUsers.rejected]: (state, action) => {
            console.log(action)
            state.bigError = action.error
          state.error = action.payload.detail
          state.loading = 'Error loading'
        }
      }


}
    
);

const reducer = findFriendsSlice.reducer;

const allUserSelect = store => store.findFriends.results

export { reducer, allUserSelect }