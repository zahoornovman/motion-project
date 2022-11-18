import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { selectUserId } from '../store/selectors';

import { addPost } from '../store/slices/posts'

function NewPost() {
  const [newPostValue, setNewPostValue] = React.useState('');
  const dispatch = useDispatch();
//   const userId = useSelector(selectUserId)
  const userId = useSelector((state) => state.posts.list);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setNewPostValue('')
      dispatch(addPost({ userId: 99, content: newPostValue }));
    }}
    className="new-Post"
    >
      <input
        placeholder="New Post"
        value={newPostValue}
        onChange={(e) => {
          setNewPostValue(e.currentTarget.value);
        }} />
      <button>Add new Post</button>
    </form>
  )
}

export default NewPost;