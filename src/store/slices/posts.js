import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "user/getPosts}",
  async (payload) => {
    console.log(payload);
    try {
      const { data } = await axios.get(
        "https://motion.propulsion-home.ch/backend/api/social/posts/me/",
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MTE1NzI4LCJqdGkiOiI2YjJiMGYwNjllZTA0NGJiYTdlNzIzNjBlZGQ5Yjk5MCIsInVzZXJfaWQiOjE5OTF9.y0MGJbv6n6cSr2cQ70VWFMA73PuScw6pMoviJ-J_PI8",
          },
        },
        payload
      );

      return data.results.map((post) => post);
    } catch (err) {
      console.log(err);
    }
  }
);

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (payload) => {
    console.log(payload);
    let raw = JSON.stringify({
      content: `${payload}`,
    });
    console.log(payload);

    try {
      const { data } = await axios.post(
        "https://motion.propulsion-home.ch/backend/api/social/posts/",
        raw,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MTE1NzI4LCJqdGkiOiI2YjJiMGYwNjllZTA0NGJiYTdlNzIzNjBlZGQ5Yjk5MCIsInVzZXJfaWQiOjE5OTF9.y0MGJbv6n6cSr2cQ70VWFMA73PuScw6pMoviJ-J_PI8",
            "Content-Type": "application/json",
          },
        },
        payload
      );

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // We can directly add the new post object to our posts array
        state.posts.push(action.payload);
      });
  },
});

// export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId);
