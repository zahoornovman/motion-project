import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewPost } from "./NewPost";
import { fetchPosts } from "../store/slices/posts";
import { selectUserToken } from "../store/slices/loginUser";

import { MenuPost, Post } from "./styledPosts/styles";
import { ProfilePost } from "./styledPosts/styles";
import ProfilePic from "../assets/images/users/jennifer.png";
import MenuIcon from "../assets/svgs/menu.svg";

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt">
      {/* <h3>SINGLE POST</h3> */}
      {/* <h3>{post.id}</h3>
      <div>
        {post.user.id}
        <input type="checkbox" defaultChecked={post.logged_in_user_liked} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p> */}

      <h3>SINGLE STYLED POST</h3>
      <div className="top">
        <ProfilePost>
          <img src={ProfilePic} alt="icon-profile" />
        </ProfilePost>

        <div className="name">
          <p>First Name: {post.user.first_name}</p>
          <p>Last Name: {post.user.last_name}</p>
          <p>Avatar: {post.user.avatar}</p>
          <p>Created: {post.created}</p>
          <p>Created: {Date.parse(post.created)}</p>
          <p>
            <input
              type="checkbox"
              id="liked"
              defaultChecked={post.logged_in_user_liked}
            />
            <label for="liked">Liked</label>
          </p>
          <p>
            <input
              type="checkbox"
              id="following"
              defaultChecked={post.logged_in_user_is_following}
            />
            <label for="liked">Following</label>
          </p>
          <p>
            <input
              type="checkbox"
              id="friends"
              defaultChecked={post.logged_in_user_is_friends}
            />
            <label for="friends">Friends</label>
          </p>
          <p>Amount of Likes: {post.amount_of_likes}</p>
          {/* <p>Images: {post.images[0]}</p> */}

          {/* <p>Shared User First Name {post.shared.user.first_name}</p> */}
          {/* <p>Shared Content {post.shared.content}</p> */}
        </div>

        <MenuPost>
          <img src={MenuIcon} alt="icon-profile" />
        </MenuPost>
      </div>
    </article>
  );
};

export function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const payload = { url: null, token: useSelector(selectUserToken) };

  payload.url =
    "https://motion.propulsion-home.ch/backend/api/social/posts/me/";
  //   payload.url =
  //     "https://motion.propulsion-home.ch/backend/api/social/posts/following/";
  //   payload.url =
  //     "https://motion.propulsion-home.ch/backend/api/social/posts/friends/";
  //   payload.url =
  //     "https://motion.propulsion-home.ch/backend/api/social/posts/likes/";

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts(payload));
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "succeeded") {
    console.log("success");
    console.log(posts);
    // Sort posts in reverse chronological order by created timestamp
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.created.localeCompare(a.created));

    console.log(orderedPosts);
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    console.log("fail");
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h1>POSTS</h1>

      <h2>NEWPOST</h2>
      <NewPost />

      <h2>AFTER NEWPOST</h2>
      {postStatus}
      {content}
    </section>
  );
}

export default PostsList;
