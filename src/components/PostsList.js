import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewPost } from "./NewPost";
import { fetchPosts } from "../store/slices/posts";
import { selectUserToken } from "../store/slices/loginUser";
import { MenuPost, Post } from "./styledPosts/styles";
import { ProfilePost } from "./styledPosts/styles";
import ProfilePic from "../assets/images/users/jennifer.png";
import MenuIcon from "../assets/svgs/menu.svg";
import Share from '../assets/svgs/share.svg';
import Heart from '../assets/svgs/heart.svg';
// export const ReactionButton = ({ post }) => {
//   const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
//     return (
//       <button key={name} type="button" className="muted-button reaction-button">
//         {emoji} {post.reactions[name]}
//       </button>
//     )
//   })

const PostExcerpt = ({ post }) => {
  return (
    <article className="post-excerpt">
      <h3>TEST</h3>
      <h3>{post.id}</h3>
      <div>
        {post.user.id}
        {post.created}
        {/* {post.logged_in_user_liked}    */}
        <input type="checkbox" defaultChecked={post.logged_in_user_liked} />
        {/* <PostAuthor userId={post.user} /> */}
        {/* <TimeAgo timestamp={post.created} /> */}
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      {/* <ReactionButtons post={post} /> */}
      {/* <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link> */}
    </article>
  );
};

export function PostsList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const payload = { token: useSelector(selectUserToken) };

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

  console.log(content)

  return (
    <section className="posts-list">
      <NewPost />

      <Post>
        <div className="top">
          <ProfilePost>
            <img src={ProfilePic} alt="icon-profile" />
          </ProfilePost>

          <div className="name">
            <p>Jennifer Smith</p>
            <p>Just now</p>
          </div>

          <MenuPost>
            <img src={MenuIcon} alt="icon-profile" />
          </MenuPost>
        </div>
        {content[0]}

        <div className="bottom">
            <div className="Heart">
                    <img src={Heart} alt='heart'/>
                    <p>Like</p>    
            </div>
            <div className="Share">
                <img src={Share} alt='share' />
                <p>Share</p>
            </div>
            <div className="Likes">
                <p> 2 likes</p>
            </div>
        </div>
      </Post>
    </section>
  );
}

export default PostsList;
