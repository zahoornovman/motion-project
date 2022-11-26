//libraries
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//selectors
import { selectUserToken } from "../../store/slices/loginUser";
import {
  selectNotificationCount,
  getNotifications,
  setNotificationError,
} from "../../store/slices/loginUser";
import { selectUserAvatar } from "../../store/slices/loginUser";


//other components
import { NotificationsDropdown } from "../Notifications/NotificationsDropdown";

//styledComponents
import {
  NavContainer,
  NavFriends,
  NavNotification,
  NavPost,
  ProfileIcon,
  Menu,
  StyledNavDropdown,
} from "./styles";

//images and svgs
import LogoNav from "../../assets/images/logo.png";
import PostNav from "../../assets/images/posts_logo.png";
import FriendsNav from "../../assets/svgs/icon-friends.svg";
import NotificationNav from "../../assets/svgs/notification_bell.svg";
import MenuIcon from "../../assets/svgs/menu.svg";

function NavBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  const [open, setOpen] = useState(false);
  //const [notificationsCount, setNotificationsCount] = useState(0);

  const handleNotificationOpen = () => {
    setOpen(!open);
  };

  const count = useSelector(selectNotificationCount);
  let token = useSelector(selectUserToken);
  const avatar = useSelector(selectUserAvatar);
  // const notification = useSelector(selectNotifications);


  const fetchNotifications = () => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://motion.propulsion-home.ch/backend/api/social/friends/requests/?limit=5&offset=0",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(); // Will `catch` the error below
        }
        return response.json();
      })
      .then((result) => dispatch(getNotifications(result)))
      .catch((error) => console.log(error));
    // .catch((error) => dispatch(setNotificationError(error.text())));

  }

  useEffect(() => {
    fetchNotifications();
    //setNotificationsCount(count);
  }, [location] );

  return (
    <NavContainer>
      <div>
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
      </div>

      <div>
        <NavNotification onClick={handleNotificationOpen}>
          <div>{open === true ? <NotificationsDropdown /> : null}</div>
          <img src={NotificationNav} alt="icon-notification" />
          <span>
            <p>{count}</p>
          </span>
        </NavNotification>

        <Link to="/profile">
          <ProfileIcon>
            <img src={avatar} alt="icon-profile" />
          </ProfileIcon>
        </Link>

        <Menu>
          <img src={MenuIcon} alt="icon-menu"></img>
        </Menu>
      </div>
    </NavContainer>
  );
}

export default NavBar;
