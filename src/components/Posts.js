import { useSelector } from 'react-redux';
import { Post } from './Post';
// Merge conflict Michael

// import { selectPosts } from '../store/selectors'

export function Posts() {
  // const posts = useSelector(selectPosts);
  const posts = useSelector((state) => state.posts.list);

  if (posts.length === 0) return <div>Loading...</div>

  return (
    <ul className='posts'>
      {posts.map(post => <Post post={post} key={post.postId} />)}
    </ul>
  )
}

export default Posts;