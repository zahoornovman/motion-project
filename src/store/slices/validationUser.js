import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const validationUser = createAsyncThunk(
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

const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {},
  extraReducers: {
    [validationUser.pending]: (state) => {
      state.status = "loading";
    },
    [validationUser.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "loading complete";
    },
    [validationUser.rejected]: (state, action) => {
      console.log('reject')
      state.errorUserName = action.payload.username;
      state.errorCode = action.payload.code;
      state.status = "status error";
    },
  },
});

export default validationSlice.reducer;

