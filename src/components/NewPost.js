import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserToken } from '../store/slices/loginUser';
// import { addPost } from '../store/slices/posts';
import { addNewPost } from '../store/slices/posts';

function NewPost() {
    const [newPost, setNewPost] = useState('');
    const dispatch = useDispatch();
    const body = { newPost: newPost, token: useSelector(selectUserToken) };

    const handleAddPost = (e) => {
        e.preventDefault();
        // creates the dispatch action into a variable for easy reading
        // const action = addPost(newPost);
        // dispatch(addPost(newPost));
        dispatch(addNewPost(body));

        // dispatch(addNewPost({ title, content, user: userId })).unwrap()

        // cleanes the local state
        setNewPost('');
    };

    const handleNewPostChange = (e) => {
        const newPost = e.currentTarget.value;
        // sets the state with the input
        setNewPost(newPost);
    };

    return (
        <div className="NewPost">
            <form onSubmit={handleAddPost}>
                <input
                    type="text"
                    placeholder="Your next post"
                    value={newPost}
                    onChange={handleNewPostChange}
                />
                <input type="submit" value={'Add'} />
            </form>
        </div>
    );
}

export { NewPost };
