import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    count: 20,
    results: [],
    next: null,
    previous: null,
    error: "",
  },
  reducers: {
    getNotifications: (state, action) => {
      state.results = action.payload.results;
      console.log(action.payload);
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    setError: (state, action) => {
      state.error = action.payload.details;
      console.log(state.error);
    },
  },
});

const getNotifications = notificationSlice.actions.getNotifications;
const setError = notificationSlice.actions.setError;

const reducer = notificationSlice.reducer;

const selectNotificationCount = (store) => store.notifications.count;

export { getNotifications, setError, reducer, selectNotificationCount };
