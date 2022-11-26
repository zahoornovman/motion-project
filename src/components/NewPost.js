import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../store/slices/loginUser";
import { addNewPost } from "../store/slices/posts";
import { PostSection, ProfilePost } from "./styledPosts/styles";
import ProfilePic from "../assets/images/users/jennifer.png";
import SendBtn from "../assets/svgs/send_button.svg";
import { StyledInputFile } from "./styledComponents/StyledInput";

function NewPost() {
  const [newPostText, setNewPostText] = useState("");
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
        <input
          type="text"
          placeholder="What's on your mind, name?"
          value={newPostText}
          onChange={handleNewPostChange}
        />
        <input name="fileUpload" type="file" onChange={onFileChange}></input>
        <button type="submit">
          <img src={SendBtn} alt="send button"></img>
        </button>
      </PostSection>
    </div>
  );
}

export { NewPost };
