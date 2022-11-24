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
import ProfilePic from "../../assets/images/users/jennifer.png";
import MenuIcon from "../../assets/svgs/menu.svg";

function NavBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const handleNotificationOpen = () => {
    setOpen(!open);
  };

  const count = useSelector(selectNotificationCount);
  let token = useSelector(selectUserToken);

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
      .catch((error) => dispatch(setNotificationError(error)));
  }, [location]);

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
          <img           
            src={NotificationNav}
            alt="icon-notification"
          />
          <span>
            <p>{count}</p>
          </span>
        </NavNotification>

        <Link to="/profile">
          <ProfileIcon>
            <img src={ProfilePic} alt="icon-profile" />
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
