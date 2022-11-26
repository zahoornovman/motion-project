import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import DefaultImg from '../../assets/images/default.png'

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
    avatar: null,
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
      state.notifications.count = action.payload.count;
      state.notifications.next = action.payload.next;
      state.notifications.previous = action.payload.previous;
      //logic to segregate friends requests received from friend requests sent
      const list = action.payload.results;
      const copyReceived = list.filter((item) => item.receiver.id === state.id);
      state.notifications.received = copyReceived;
      const copyRequested = list.filter(
        (item) => item.requester.id === state.id
      );
      state.notifications.requested = copyRequested;
    },
    //any error during notification is recorded here.
    setNotificationError: (state, action) => {
      state.notifications.error = action.payload;
    },
    deleteFriendRequest: (state, { payload }) => {
      console.log(payload);
      state.notifications.requested = state.notifications.requested.filter(
        (obj) => {
          return obj.id !== parseInt(payload);
        }
      );
      // state.notifications.count -= 1;
    },
    updateRemainingNotifications: (state, { payload }) => {
      state.notifications.received = state.notifications.received.filter(
        (obj) => {
          return obj.id !== parseInt(payload);
        }
      );
      state.notifications.count -= 1;
    },
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
      if (action.payload.user.avatar === null || action.payload.user.avatar === ''){
        state.avatar = DefaultImg;
      } else {
        state.avatar = action.payload.user.avatar;
      }
      
    },
    [loginUser.rejected]: (state) => {
      state.loading = "Error loading";
    },
  },
});

const getNotifications = userSlice.actions.getNotifications;
const setNotificationError = userSlice.actions.setNotificationError;
const deleteFriendRequest = userSlice.actions.deleteFriendRequest;
const updateRemainingNotifications =
  userSlice.actions.updateRemainingNotifications;

const selectUserToken = (store) => store.user.token;
const selectNotificationCount = (store) => store.user.notifications.count;
const selectNotificationsReceived = (store) =>
  store.user.notifications.received;
const selectNotificationsRequested = (store) =>
  store.user.notifications.requested;
const selectNotifications = (store) => store.user.notifications;
const selectUserAvatar = (store) => store.user.avatar;

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
  selectNotifications,
  selectUserAvatar,
};
