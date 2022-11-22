import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/login", async (payload) => {
  const { data } = await axios.post(
    "https://motion.propulsion-home.ch/backend/api/auth/token/",
    payload
  );
  return data;
}); //catch(error) ??

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    id: null,
    token: "",
    refresh: "",
    loading: null,
    error: "",
    notifications: {
      count: 20,
      received: [],
      requested: [],
      next: null,
      previous: null,
      error: "",
    },
  },
  reducers: {
    getNotifications: (state, action) => {
      console.log(action.payload);
      state.notifications.count = action.payload.count;
      state.notifications.next = action.payload.next;
      state.notifications.previous = action.payload.previous;
      //logic to segregate friends requests received from friend requests sent
      const list = action.payload.results;
      const copyReceived = list.filter((item) => item.receiver.id == state.id);
      state.notifications.received = copyReceived;
      const copyRequested = list.filter(
        (item) => item.requester.id == state.id
      );
      state.notifications.requested = copyRequested;
    },
    setNotificationError: (state, action) => {
      state.error = action.payload.details;
      console.log(state.error);
    },
    deleteFriendRequest: (state, { payload }) => {
      console.log(payload);
      state.notifications.requested = state.notifications.requested.filter(
        (obj) => {
          console.log(obj.id);
          console.log(typeof obj.id);
          console.log(payload);
          console.log(typeof payload);
          return obj.id !== parseInt(payload);
        }
      );
    },
    updateRemainingNotifications: (state, {payload}) => {
      state.notifications.received = state.notifications.received.filter(
        (obj) => {
          return obj.id !== parseInt(payload);
        }
      );
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = "loading";
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = "loading complete";
      state.id = action.payload.user.id;
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

const getNotifications = userSlice.actions.getNotifications;
const setNotificationError = userSlice.actions.setNotificationError;
const deleteFriendRequest = userSlice.actions.deleteFriendRequest;
const updateRemainingNotifications = userSlice.actions.updateRemainingNotifications;

const selectUserToken = (store) => store.user.token;
const selectNotificationCount = (store) => store.user.notifications.count;
const selectNotificationsReceived = (store) =>
  store.user.notifications.received;
const selectNotificationsRequested = (store) =>
  store.user.notifications.requested;

export default userSlice.reducer;
export { selectUserToken };
export {
  getNotifications,
  setNotificationError,
  deleteFriendRequest,
  updateRemainingNotifications,
  selectNotificationCount,
  selectNotificationsReceived,
  selectNotificationsRequested,
};
