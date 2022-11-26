import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewPost } from "./NewPost";
import { fetchPosts } from "../store/slices/posts";
import { selectUserToken } from "../store/slices/loginUser";
import { MenuPost, Post } from "./styledPosts/styles";
import { ProfilePost } from "./styledPosts/styles";
import { PostsWrap } from "./styledPosts/styles";

// import { selectUserAvatar } from "../store/slices/loginUser";
import MenuIcon from "../assets/svgs/menu.svg";
import Share from "../assets/svgs/share.svg";
import Heart from "../assets/svgs/heart.svg";

import { format, formatDistance, subDays } from "date-fns";
import Searchbar from "./Searchbar";

const PostExcerpt = ({ post }) => {
  const hasFile = post.images.length > 0;
  return (
    <>
      <Post>
        <div className="top">
          <ProfilePost>
            {post.user.avatar && <img src={post.user.avatar} alt="icon-profile" />}
          </ProfilePost>

          <div className="name">
            <p>
              {post.user.first_name} {post.user.last_name}
            </p>
            <p className="hours">
              {formatDistance(Date.parse(post.created), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>

          <MenuPost>
            <img src={MenuIcon} alt="icon-profile" />
          </MenuPost>
        </div>

        <div className="post-content">
          <p>{post.content}</p>
          {hasFile && <img src={post.images[0].image} alt="post-image" />}
        </div>

        <div className="bottom">
          <div className="Heart">
            <img src={Heart} alt="heart" />
            <p>Like</p>
          </div>
          <div className="Share">
            <img src={Share} alt="share" />
            <p>Share</p>
          </div>
          <div className="Likes">
            <p>{post.amount_of_likes} Likes</p>
          </div>
        </div>
      </Post>
    </>
  );
};

export function PostsList(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const payload = { url: null, token: useSelector(selectUserToken) };
  console.log(props);

  let url;

  if (props.filter === "currentUser") {
    url = "https://motion.propulsion-home.ch/backend/api/social/posts/me/";
  } else {
    url = "https://motion.propulsion-home.ch/backend/api/social/posts/me/";
  }

  payload.url = url;

  //     'https://motion.propulsion-home.ch/backend/api/social/posts/me/';
  //     "https://motion.propulsion-home.ch/backend/api/social/posts/following/";
  //     "https://motion.propulsion-home.ch/backend/api/social/posts/friends/";
  //     "https://motion.propulsion-home.ch/backend/api/social/posts/likes/";

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts(payload));
    }
  }, [postStatus, dispatch, payload]);

  let content;

  if (postStatus === "succeeded") {
    // Sort posts in reverse chronological order by created timestamp
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.created.localeCompare(a.created));

    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    console.log("fail");
    content = <div>{error}</div>;
  }

  return (
    <div>
      <Searchbar />
      <PostsWrap>
        <NewPost />
        {content}
      </PostsWrap>
    </div>
  );
}

export default PostsList;
