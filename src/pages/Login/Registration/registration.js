import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser } from "../../../store/slices/registerUser";

import LogoLogin from "../../../assets/images/logo_white.png";
import FaceBook from "../../../assets/svgs/facebook_icon.svg";
import InstaGram from "../../../assets/svgs/instagram_icon.svg";
import Twitter from "../../../assets/svgs/twitter_icon.svg";

import AppleStore from "../../../assets/svgs/apple.svg";
import GoogleStore from "../../../assets/svgs/google.svg";

import {
  Container,
  ContainerLeftBottom,
  ContainerLeft,
  ContainerRight,
  ContainerRightBottom,
  ContainerRightTop,
  ContainerLeftTop,
  SignInBtn,
  CircleBlack,
  CircleGhost,
  SocialMed,
  Store
} from "../styles";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  console.log(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(newUser({ email }));
    navigate("/registration/succes");
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
        <ContainerRightTop></ContainerRightTop>
        <ContainerRightBottom>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <SignInBtn>
              <p>SIGN UP</p>
            </SignInBtn>
            </form>
            <div>
            <CircleBlack/>
            <CircleGhost/>
            <CircleGhost/>
            </div>
        </ContainerRightBottom>
      </ContainerRight>
    </Container>
  );
};

export default Registration;
