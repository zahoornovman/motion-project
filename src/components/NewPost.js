import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../store/slices/loginUser";
import { addNewPost } from "../store/slices/posts";
import { StyledInputFile } from "./styledComponents/StyledInput";

import { ProfileIcon } from "./Navbar/styles";
import { PostSection, ProfilePost } from "./styledPosts/styles";
import ProfilePic from "../assets/images/users/jennifer.png";
import SendBtn from '../assets/svgs/send_button.svg';

function NewPost() {
  const [newPostText, setNewPostText] = useState("");
  // const [newPostImage, setNewPostImage] = useState("");
  const [newPostImage, setNewPostImage] = useState({ image: "" });
  const dispatch = useDispatch();
  const body = {
    newPostText: newPostText,
    newPostImage: newPostImage,
    token: useSelector(selectUserToken),
  };

  const handleAddPost = (e) => {
    e.preventDefault();
    dispatch(addNewPost(body));

    // cleanes the local state
    setNewPostText("");
    setNewPostImage("");
  };

  const handleNewPostChange = (e) => {
    const newPostText = e.currentTarget.value;
    // sets the state with the input
    setNewPostText(newPostText);
  };

  const onFileChange = (e) => {
    // e.preventDefault(); // not submitting here
    console.log(e.target.files);
    const newPostImage = e.target.files["0"];
    setNewPostImage(newPostImage);

    console.log("image state", newPostImage);
  };

  return (
    <div className="NewPost">
      <PostSection onSubmit={handleAddPost}>
        
      <ProfilePost>
            <img src={ProfilePic} alt="icon-profile" />
          </ProfilePost>

      <form onSubmit={handleAddPost}>
        <input
          type="text"
          placeholder="What's on your mind, NAME?"
          value={newPostText}
          onChange={handleNewPostChange}
        />
        <StyledInputFile
          label="Upload image"
          onChange={onFileChange}
        ></StyledInputFile>
          <input type="submit" value={"Add"} />


          {/* <button type="submit">
            <img src={SendBtn} alt='send button'>
            </img>
          </button> */}
          
        </form>
        </PostSection>

    </div>
  );
}

export { NewPost };
