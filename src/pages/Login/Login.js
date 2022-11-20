import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../../store/slices/loginUser";

import LogoLogin from "../../assets/images/logo_white.png";
import FaceBook from "../../assets/svgs/facebook_icon.svg";
import InstaGram from "../../assets/svgs/instagram_icon.svg";
import Twitter from "../../assets/svgs/twitter_icon.svg";

import AppleStore from "../../assets/svgs/apple.svg";
import GoogleStore from "../../assets/svgs/google.svg";

import PwIcon from "../../assets/svgs/password.svg";
import AvIcon from "../../assets/svgs/avatar.svg";

import {
  Container,
  ContainerLeftBottom,
  ContainerLeft,
  ContainerRight,
  ContainerRightBottom,
  ContainerRightTop,
  ContainerLeftTop,
  SignUpBtn,
  SignInBtn,
  SocialMed,
  Store,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(user));
    navigate(from, { replace: true });
  };

  return (
    <Container>
      <ContainerLeft>
        <ContainerLeftTop>
          <img src={LogoLogin} alt="logo"></img>
          <h2>Motion</h2>
        </ContainerLeftTop>
        <ContainerLeftBottom>
          <h2>
            Connect with friends and the world
            <br></br>
            around you with Motion.
          </h2>
          <div>
            <Store src={AppleStore} alt="AppleStore" />
            <Store src={GoogleStore} alt="GoogleStore" />
          </div>
          <div>
            <SocialMed src={Twitter} alt="Twitter" />
            <SocialMed src={FaceBook} alt="facebook" />
            <SocialMed src={InstaGram} alt="InstaGram" />
          </div>
          <p>© Motion 2018. All rights reserved.</p>
        </ContainerLeftBottom>
      </ContainerLeft>
      <ContainerRight>
        <ContainerRightTop>
          <p>Don't have an account?</p>
          <Link to="/registration">
            <SignUpBtn>
              <p>SIGN UP</p>
            </SignUpBtn>
          </Link>
        </ContainerRightTop>
        <ContainerRightBottom>
          <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <div>
              <img src={AvIcon} alt="password"></img>
              <input
                text="text"
                placeholder="Username"
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, email: e.currentTarget.value })
                }
              />
            </div>
            <div>
              <img src={PwIcon} alt="password"></img>
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e.currentTarget.value })
                }
              />
            </div>
            <>
              <SignInBtn>
                <p>SIGN IN</p>
              </SignInBtn>
            </>
          </form>
        </ContainerRightBottom>
      </ContainerRight>
    </Container>
  );
};

export default Login;
