//libraries
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//selectors
import { selectUserToken } from "../../store/slices/loginUser";
import {
  selectNotificationCount,
  getNotifications,
  setError,
} from "../../store/slices/notifications";

//styledComponents
import {
  NavContainer,
  NavFriends,
  NavNotification,
  NavPost,
  ProfileIcon,
  Menu,
} from "./styles";

//images and svgs
import LogoNav from "../../assets/images/logo.png";
import PostNav from "../../assets/images/posts_logo.png";
import FriendsNav from "../../assets/svgs/icon-friends.svg";
import NotificationNav from "../../assets/svgs/notification_bell.svg";
import ProfilePic from "../../assets/images/users/jennifer.png";
import MenuIcon from "../../assets/svgs/menu.svg";

function NavBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector(selectNotificationCount);


  let token = useSelector(selectUserToken);
  console.log(token);
  if (token === "") {
    token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODcyOTU1LCJqdGkiOiIyMWM2NGZmNDA1YTk0MDllYjk0N2ZjYTAyYzI1ODAxNiIsInVzZXJfaWQiOjE5NzN9.NiwT2veTN1-uEoU8B1GaxW_41lMRREc1JsLmYickftI";
    console.log("Hard Coded token used");
  } else {
    console.log('store token used');

  }

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://motion.propulsion-home.ch/backend/api/social/friends/requests/?limit=5&offset=0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => dispatch(getNotifications(result)))
      .catch((error) => dispatch(setError(error)));
  }, [token]);

  console.log()

  return (
    <NavContainer>
      <Link to="/">
        <div>
          <img src={LogoNav} alt="logo"></img>
          <p>Motion</p>
        </div>
      </Link>

      <Link to="/posts">
        <NavPost>
          <img src={PostNav} alt="icon-post"></img>
          <p>Post</p>
        </NavPost>
      </Link>

      <Link to="/find-friends">
        <NavFriends>
          <img src={FriendsNav} alt="icon-friends"></img>
          <p>Find Friends</p>
        </NavFriends>
      </Link>

      <NavNotification>
        <img src={NotificationNav} alt="icon-notification" />
        <div>
          <p>{count}</p>
        </div>
      </NavNotification>

      <Link to="/profile">
        <ProfileIcon>
          <img src={ProfilePic} alt="icon-profile" />
        </ProfileIcon>
      </Link>

      {props.isLoggedIn === true && (
        <Menu>
          <img src={MenuIcon} alt="icon-menu"></img>
        </Menu>
      )}
    </NavContainer>
  );
}

export default NavBar;
