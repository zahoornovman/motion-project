import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserToken } from "../store/slices/loginUser";
import { addNewPost } from "../store/slices/posts";
import { StyledInputFile } from "./styledComponents/StyledInput";

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
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          placeholder="Your next post"
          value={newPostText}
          onChange={handleNewPostChange}
        />
        <StyledInputFile
          label="Upload image"
          onChange={onFileChange}
        ></StyledInputFile>
        <input type="submit" value={"Add"} />
      </form>
    </div>
  );
}

export { NewPost };
