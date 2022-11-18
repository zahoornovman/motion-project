import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const newUserInfoValidation = createAsyncThunk(
  "userValidation",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      const { data } = await axios.patch(
        "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/",
        payload
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  status: null,
  errorUserName: "",
  errorCode: "",
};

const newUserValidation = createSlice({
  name: "newUserValidation",
  initialState,

  reducers: {},
  extraReducers: {
    [newUserInfoValidation.pending]: (state) => {
      state.status = "loading";
    },
    [newUserInfoValidation.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "loading complete";
    },
    [newUserInfoValidation.rejected]: (state, action) => {
      state.errorUserName = action.payload.username;
      state.errorCode = action.payload.code;
      state.status = "status error";
    },
  },
});

export default newUserValidation.reducer;
