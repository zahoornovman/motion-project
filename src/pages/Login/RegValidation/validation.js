import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectRegisterUser,
  selectValidationUser,
} from "../../../store/selectors/selectors";

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
  FormVali,
  CircleBlack,
  CircleGhost,
  SocialMed,
  Store
} from "../styles";

import { validationUser } from "../../../store/slices/validationUser";

const RegValidation = () => {
  const registerUser = useSelector(selectRegisterUser);
  const userValidation = useSelector(selectValidationUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_repeat, setPasswordRepeat] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(registerUser);
    const email = registerUser.email;
    const payload = {
      email,
      username,
      code,
      password,
      password_repeat,
      first_name,
      last_name,
    };
    dispatch(validationUser(payload));
    if (userValidation.status === "status error") {
      navigate("/registration/validation/error");
    } else {
      navigate("/registration/validation/success");
    }
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
          <FormVali onSubmit={handleOnSubmit}>
            <h2>Validation</h2>
            <label className="code">
              <input
                type="text"
                placeholder="Validation code"
                value={code}
                onChange={(e) => setCode(e.currentTarget.value)}
              />
            </label>
            <div>
              <label>
                Email
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </label>
              <label>
                Username
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </label>
              <label>
                First Name
                <input
                  type="text"
                  placeholder="First Name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.currentTarget.value)}
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={(e) => setLastName(e.currentTarget.value)}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </label>
              <label>
                Repeat Password
                <input
                  type="password"
                  placeholder="password"
                  value={password_repeat}
                  onChange={(e) => setPasswordRepeat(e.currentTarget.value)}
                />
              </label>
            </div>

            <SignInBtn onClick={() => navigate("/login")}>
              <p>COMPLETE</p>
            </SignInBtn>
          </FormVali>
          <div>
            <CircleGhost />
            <CircleGhost />
            <CircleBlack />
          </div>
        </ContainerRightBottom>
      </ContainerRight>
    </Container>
  );
};

export default RegValidation;
