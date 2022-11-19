import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/slices/posts';

function NewPost() {
  const [newPost, setNewPost] = useState('');
  const dispatch = useDispatch();

  const handleAddPost = (e) => {
    e.preventDefault();
    // creates the dispatch action into a variable for easy reading
    // const action = addPost(newPost);
    dispatch(addPost(newPost));
    // cleanes the local state
    setNewPost('');
  };

  const handleNewPostChange = (e) => {
    const newPost = e.currentTarget.value;
    // sets the state with the input
    setNewPost(newPost);
  };

  return (
    <div className='NewPost'>
      <form onSubmit={handleAddPost}>
        <input
          type='text'
          placeholder='Your next post'
          value={newPost}
          onChange={handleNewPostChange}
        />
        <input type='submit' value={'Add'} />
      </form>
    </div>
  );
}

export { NewPost };