import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const newUser = createAsyncThunk(
  "newUser/registerUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://motion.propulsion-home.ch/backend/api/auth/registration/",
        payload
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  email: "",
  loading: null,
  error: "",
};

const registerUser = createSlice({
  name: "registerUser",
  initialState,
  
  reducers: {},
  extraReducers: {
    [newUser.pending]: (state) => {
      state.loading = "loading";
    },
    [newUser.fulfilled]: (state, action) => {
      console.log(action);
      state.email = action.meta.arg.email;
      console.log(action.meta.arg.email)
      state.loading = "loading complete";
    },
    [newUser.rejected]: (state, action) => {
      state.error = action.payload.email;
      state.loading = "Error Loading";
    },
  },
});

export default registerUser.reducer;
