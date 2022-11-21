import { useNavigate } from "react-router-dom";

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
  Check,
  CircleBlack,
  CircleGhost,
  SocialMed,
  Store
} from "../styles";

const RegSuccess = () => {
  const navigate = useNavigate();
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
          <h2>Congratulations!</h2>
          <Check>
            <p>√</p>
          </Check>
          <h3>We've sent a confirmation code to your email</h3>
          <SignInBtn onClick={() => navigate("/registration/validation")}>
            <p>CONTINUE</p>
          </SignInBtn>
          <div>
            <CircleGhost />
            <CircleBlack />
            <CircleGhost />
          </div>
        </ContainerRightBottom>
      </ContainerRight>
    </Container>
  );
};

export default RegSuccess;
