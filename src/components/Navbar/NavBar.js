import React from 'react';

import { Link } from 'react-router-dom';

import {
  NavContainer,
  NavFriends,
  NavNotification,
  NavPost,
  ProfileIcon,
  Menu,
} from './styles';

import LogoNav from "/Users/alessiotortora/Desktop/Motion/group01/src/assets/images/logo.png";
import PostNav from "/Users/alessiotortora/Desktop/Motion/group01/src/assets/images/posts_logo.png";
import FriendsNav from "/Users/alessiotortora/Desktop/Motion/group01/src/assets/svgs/icon-friends.svg";
import NotificationNav from "/Users/alessiotortora/Desktop/Motion/group01/src/assets/svgs/notification_bell.svg";
import ProfilePic from "/Users/alessiotortora/Desktop/Motion/group01/src/assets/images/users/jennifer.png";
import MenuIcon from "/Users/alessiotortora/Desktop/Motion/group01/src/assets/svgs/menu.svg";

function NavBar() {
  return (
    <NavContainer>

      <Link to='/'>
        <div>
          <img src={LogoNav} alt='logo'></img>
          <p>Motion</p>
        </div>
      </Link>

      <Link to='/posts'>
        <NavPost>
          <img src={PostNav} alt='icon-post'></img>
          <p>Post</p>
        </NavPost>
      </Link>

      <Link to='/friends'>
        <NavFriends>
          <img src={FriendsNav} alt='icon-friends'></img>
          <p>Friends</p>
        </NavFriends>
      </Link>

      <NavNotification>
        <img src={NotificationNav} alt='icon-notification' />
        <div>
          <p>0</p>
        </div>
      </NavNotification>

      <Link to='/profile'>
        <ProfileIcon>
          <img src={ProfilePic} alt='icon-profile' />
        </ProfileIcon>
      </Link>

      <Menu>
        <img src={MenuIcon} alt='icon-menu'></img>
      </Menu>
      
    </NavContainer>
  );
}

export default NavBar;
