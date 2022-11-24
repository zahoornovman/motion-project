import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectUserToken } from "./loginUser";

export const fetchPosts = createAsyncThunk(
  "user/getPosts}",
  async (payload) => {
    console.log(payload);
    try {
      const { data } = await axios.get(
        `${payload.url}`,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
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
    let formdata = new FormData();
    formdata.append("images", payload.newPostImage, "[PROXY]");
    formdata.append("content", payload.newPostText);

    try {
      const { data } = await axios.post(
        "https://motion.propulsion-home.ch/backend/api/social/posts/",
        formdata,
        {
          headers: {
            Authorization: `Bearer ${payload.token}`,
            "Content-Type": "multipart/form-data",
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
