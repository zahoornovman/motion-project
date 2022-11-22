import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../store/slices/loginUser";
// import { addPost } from '../store/slices/posts';
import { addNewPost } from "../store/slices/posts";
import { ProfileIcon } from "./Navbar/styles";
import { PostSection, ProfilePost } from "./styledPosts/styles";
import ProfilePic from "../assets/images/users/jennifer.png";
import SendBtn from '../assets/svgs/send_button.svg';

function NewPost() {
  const [newPost, setNewPost] = useState("");
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
    setNewPost("");
  };

  const handleNewPostChange = (e) => {
    const newPost = e.currentTarget.value;
    // sets the state with the input
    setNewPost(newPost);
  };

  return (
    <div className="NewPost">
      <PostSection onSubmit={handleAddPost}>
          <ProfilePost>
            <img src={ProfilePic} alt="icon-profile" />
          </ProfilePost>
        <input
          type="text"
          placeholder="What's on your mind, name?"
          value={newPost}
          onChange={handleNewPostChange}
        />
        <button type="submit">
            <img src={SendBtn} alt='send button'>
            </img>
        </button>
      </PostSection>
    </div>
  );
}

export { NewPost };
