import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/login", async (payload) => {
  const { data } = await axios.post(
    "https://motion.propulsion-home.ch/backend/api/auth/token/",
    payload
  );
  return data;
}); //catch(error) ??

const initialState = {
  email: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  token: "",
  refresh: "",
  loading: null,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = "loading complete";
      state.email = action.payload.user.email;
      state.username = action.payload.user.loginUser;
      state.password = action.meta.arg.password;
      state.firstName = action.payload.user.first_name;
      state.lastName = action.payload.user.last_name;
      state.token = action.payload.access;
      state.refresh = action.payload.refresh;
    },
    [loginUser.rejected]: (state) => {
      state.loading = "Error loading";
    },
  },
});

const selectUserToken = (store) => store.user.token;

export default userSlice.reducer;
export { selectUserToken}

