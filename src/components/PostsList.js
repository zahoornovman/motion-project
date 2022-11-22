import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewPost } from './NewPost';
import { fetchPosts } from '../store/slices/posts';
import { selectUserToken } from '../store/slices/loginUser';

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
            <h3>Post</h3>
            <h3>{post.id}</h3>
            <div>
                {post.user.id}
                {post.created}
                {/* {post.logged_in_user_liked}    */}
                <input
                    type="checkbox"
                    defaultChecked={post.logged_in_user_liked}
                />
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
        if (postStatus === 'idle') {
            dispatch(fetchPosts(payload));
        }
    }, [postStatus, dispatch]);

    let content;

    if (postStatus === 'succeeded') {
        console.log('success');
        console.log(posts);
        // Sort posts in reverse chronological order by created timestamp
        const orderedPosts = posts
            .slice()
            .sort((a, b) => b.created.localeCompare(a.created));

        console.log(orderedPosts);
        content = orderedPosts.map((post) => (
            <PostExcerpt key={post.id} post={post} />
        ));
    } else if (postStatus === 'failed') {
        console.log('fail');
        content = <div>{error}</div>;
    }

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {postStatus}
            {content}
            <NewPost />
        </section>
    );
}

export default PostsList;
