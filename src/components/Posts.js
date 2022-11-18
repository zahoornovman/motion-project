import { useSelector } from 'react-redux';
import { Post } from './Post';
import { NewPost } from './NewPost';
import { selectPosts } from '../store/selectors/selectors'

export function Posts() {
  const posts = useSelector(selectPosts);
  // const posts = useSelector((state) => state.posts.list);

  if (posts.length === 0) return <div>Loading...</div>

  return (
    <ul className='posts'>
      {posts.map(post => <Post post={post} key={post.postId} />)}
     <NewPost />
    </ul>
  )
}

export default Posts;